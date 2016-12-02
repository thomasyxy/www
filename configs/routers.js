"use strict";

const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);
  router.get('/home/get_init_data', ctrl.home.initData);

  router.get('/yixuan/blog/getTitle', ctrl.blog.getTitle);


  router.get('/vueapp/jsonp', ctrl.vueapp.jsonp);
  router.get('/vueapp/normal', ctrl.vueapp.normal);


  return router.middleware();
}
