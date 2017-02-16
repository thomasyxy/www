"use strict";

const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);
  router.get('/center', ctrl.home.center);
  router.get('/home/getInitData', ctrl.home.getInitData);

  router.post('/user/login', ctrl.user.login);
  router.get('/user/register', ctrl.user.register);

  router.get('/blog/getTitle', ctrl.blog.getTitle);
  router.get('/blog/md2html', ctrl.blog.md2html);

  router.get('/vueapp/jsonp', ctrl.vueapp.jsonp);
  router.get('/vueapp/normal', ctrl.vueapp.normal);

  router.get('/resume/mobile', ctrl.resume.mobile);
  router.get('/resume/query', ctrl.resume.query);
  router.get('/resume/list', ctrl.resume.list);
  router.get('/resume/main', ctrl.resume.main);
  router.post('/resume/save', ctrl.resume.save);
  router.post('/resume/create', ctrl.resume.create);


  return router.middleware();
}
