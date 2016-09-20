"use strict";

global.G = {
  C: null,
  R: null,
  M: null
};

const koa = require('koa');
const onerror = require('koa-onerror');
const request = require("./utils/request");


G.C = require('./configs/config');


const app = koa();

const isDev = (G.C.evn == 'development');

//接口代理
request(G.C.apiProxy).middleWare(app);

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
app.use(require('./configs/routers')());

/**
 * 监听端口
 */
app.listen(G.C.port);
