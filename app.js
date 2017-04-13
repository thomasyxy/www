"use strict";

global.G = {
  C: null, // 全局配置
  R: null,
  M: null
}
require('shelljs/global')

const koa = require('koa')
const router = require('koa-router')
const onerror = require('koa-onerror')
const session = require('koa-session')
const Jade = require('koa-jade')
const webpack = require('webpack')
const os = require('os')
const network = os.networkInterfaces()
const path = require('path')
const ora = require('ora')
const staticCache = require('koa-static-cache')
const Utils = require('./utils')


const proList = ['114.215.158.62']

let evn = process.env.NODE_ENV || 'development'
let root = path.resolve(__dirname, '.')

//环境判断
for (var key in network){
  var ip = network[key];
  for(var i = 0; i < ip.length; i++){
    if(proList.indexOf(ip[i].address) > -1){
      evn = 'production';
    }
  }
}

console.log(`> current environment: ` + evn)


G.C = require('./configs/config')[evn]
G.M = require('./models/index')

G.C.evn = evn
G.C.root = root

const isDev = function(){
  return G.C.evn == 'development'
}
const localUri = 'http://127.0.0.1'


const app = new koa();

const BuildStep = function(){
  var spinner = ora('building for production...')
  spinner.start()

  // var assetsPath = path.join(G.C.assetsRoot, G.C.assetsSubDirectory)
  // console.log(assetsPath)
  // rm('-rf', assetsPath)
  // mkdir('-p', assetsPath)
  // cp('-R', 'static/*', assetsPath)

  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  })
}

const DevStep = function(){
  const compiler = webpack(webpackConfig)
  const devMiddleware = require("koa-webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    static: {
      colors: true,
      chunks: false
    }
  })

  const hotMiddleware = require('koa-webpack-hot-middleware')(compiler)

  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })

  app.use(devMiddleware)

  app.use(hotMiddleware)
}

const isBuild = Utils.dataFn.hasParam('build')

const isDebug = Utils.dataFn.hasParam('debug')

const webpackConfig = require('./webpack.config')[ (isDev && !isBuild) ? 'dev' : 'prod' ]

// if(!isDebug) {
//   isBuild || !isDev ? BuildStep() : DevStep()
// }
 BuildStep()

// session
app.keys = ['some secret hurr'];
var CONFIG = {
  key: 'userid', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
};
app.use(session(CONFIG, app));


//接口代理
// request(G.C.apiProxy).middleWare(app);

//静态资源文件
app.use(staticCache('./public', {
  maxAge: 0
}));

const jade = new Jade({
  viewPath: __dirname + "/views",
  debug: isDev ? true : false,
  pretty: isDev ? true : false,
  compileDebug: false,
  locals: {
    staticPath: G.C.staticPath
  },
  app: app
})

//错误处理
onerror(app, {
  'json': function (err) {
    console.log(err);
    this.body = {
      success: false,
      message: err.message
    }
  },
  'html': function (err) {
    console.log(err);
    this.body = {
      message: '服务器错误'
    }
  }
})

//路由
app.use(require('./configs/routers')())

app.use(function*(next) {
  yield next
  if (404 !== this.status) return;
  this.status = 404;
  this.render('404', {
    msg: 'Not Found'
  })
})

/**
 * 监听端口
 */
module.exports = app.listen(G.C.port, (err) => {
  if(err){
    console.log(err)
    return
  }
  console.log('> listening at ' + localUri + ':' + G.C.port)
})
