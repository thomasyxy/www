"use strict";

global.G = {
  C: null,
  R: null,
  M: null
};

const path = require('path');
const koa = require('koa');
const router = require('koa-router');


G.C = require('./configs/config');


const app = koa();

const isDev = (G.C.evn == 'development');




//路由
// app.use(require('./configs/routers')());

/**
 * 监听端口
 */
app.listen(G.C.port);
