"use strict";

const Router = require('koa-router');

const ctrl = require('../controller/index');


module.exports = function(app){
  var router = new Router();

  router.get('/', function *(next){
    console.log(123);
  });
  router.get('/yixuan/blog/getTitle', ctrl.blog.getTitle);


  return router.middleware();
}
