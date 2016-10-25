"use strict";

const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);
  router.get('/yixuan/blog/getTitle', ctrl.blog.getTitle);

  //fie 测试插件列表数据
  router.get('/mockPlug', ctrl.blog.mockPlug);


  return router.middleware();
}
