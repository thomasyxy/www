"use strict";

const router = require('koa-router')();

const ctrl = require('../controller/index');


module.exports = function(app){

  router.get('/', ctrl.home.index);
  router.get('/center', ctrl.home.center);
  router.get('/home/getInitData', ctrl.home.getInitData);

  // router.get('/user/signUp', ctrl.user.signUp);
  router.get('/signIn', ctrl.user.signIn);
  router.get('/user/exist', ctrl.user.exist);
  router.post('/user/register', ctrl.user.register);
  router.post('/user/login', ctrl.user.login);

  router.get('/blog/getTitle', ctrl.blog.getTitle);
  router.get('/blog/md2html', ctrl.blog.md2html);

  router.get('/vueapp/jsonp', ctrl.vueapp.jsonp);
  router.get('/vueapp/normal', ctrl.vueapp.normal);

  router.get('/resume', ctrl.resume.index);
  router.get('/resume/mobile', ctrl.resume.mobile);
  router.get('/resume/list', ctrl.resume.list);
  router.get('/resume/getMain', ctrl.resume.getMain);
  router.get('/resume/setMain', ctrl.resume.setMain);
  router.get('/resume/delete', ctrl.resume.delete);
  router.post('/resume/save', ctrl.resume.save);
  router.post('/resume/create', ctrl.resume.create);

  router.post('/blog/create', ctrl.blog.create);


  return router.middleware();
}
