"use strict";

const Router = require('koa-router');

const ctrl = require('../controller/index');


module.exports = function(app){
  var router = new Router();

  router.get('/', ctrl.home.index);
  router.get('/yixuan/blog/getTitle', ctrl.blog.getTitle);


  return router.middleware();
}
