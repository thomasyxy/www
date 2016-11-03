"use strict";

global.G = {
  C: null,
  R: null,
  M: null
}

const koa = require('koa')
const router = require('koa-router')
const onerror = require('koa-onerror')
const Jade = require('koa-jade')
const webpack = require('webpack')
const os = require('os')
const network = os.networkInterfaces()
const path = require('path');
// const webpack = require('webpack');

const request = require("./utils/request")


const proList = ['114.215.158.62']
const testList = ['121.42.87.86']

let evn = process.env.NODE_ENV || 'develpoment'
let root = path.resolve(__dirname, '.')

//环境判断
for (var key in network){
  var ip = network[key];
  for(var i = 0; i < ip.length; i++){
    if(proList.indexOf(ip[i].address) > -1){
      evn = 'production';
    }else if(testList.indexOf(ip[i].address > -1)){
      evn = 'test';
    }
  }
}

debugger
G.C = require('./configs/config')[evn]
G.C.evn = evn
G.C.root = root

const isDev = (G.C.evn == 'development')
const localUri = 'http://127.0.0.1'


const app = koa()

const webpackConfig =require('./webpack-config')[ isDev ? 'dev' : 'build' ]
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  static: {
    colors: true,
    chunks: false
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

//接口代理
// request(G.C.apiProxy).middleWare(app);

const jade = new Jade({
  viewPath: __dirname + "/view",
  debug: false,
  pretty: false,
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

// app.use(devMiddleware)
//
// app.use(hotMiddleware)


//路由
app.use(require('./configs/routers')())

app.use(function*(next) {
    yield next
    if (404 !== this.status) return;
    this.status = 404;
    this.body = {
        view: '404'
    }
})

/**
 * 监听端口
 */
module.exports = app.listen(G.C.port, (err) => {
  if(err){
    console.log(err)
    return
  }
  console.log('listening at ' + localUri + ':' + G.C.port)
})
