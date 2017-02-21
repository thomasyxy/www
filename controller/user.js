"use strict"
const fs = require('fs');
const path = require('path');
const parse = require('co-body');
const jwt = require('jwt-simple');

const secret = 'never give up';

let generateToken = function(obj) {
  return jwt.encode(obj, secret);
}

let setUserData = function *(ctx, sessionId, token){
    //回写cookie
    console.log(sessionId);
    var aDay = 24 * 60 * 60 * 1000;
    ctx.cookies.set('SESSION', sessionId, {
        expires: new Date(new Date().getTime() + aDay),
        path: '/',
        httpOnly: true
    })
    ctx.cookies.set('TOKEN', token, {
        expires: new Date(new Date().getTime() + aDay),
        path: '/',
        httpOnly: true
    })
}

let registerNewUser = function *(model, data) {
  let result = {};
  let res = yield userIsExist(model, data.username);

  try{
    if(res.success === false){
      throw new Error(res.message);
    }
    if(res.data){
      if(res.data.length > 0){
        throw new Error('用户已存在')
      }
    }else{
      throw new Error('数据异常');
    }
  }catch(e){
    result.success = false;
    result.message = e.message;
  }

  if(result.success !== false){
    yield model.create(data, function(err, res) {
      try{
        if(err){
          throw new Error(err)
        }
      }catch(e){
        result.success = false;
        result.message = e.message;
      }
      if(result.success !== false){
        result.success = true;
        result.message = '注册成功';
        result.data = res;
      }
    })
  }

  return result;
}

let userIsExist = function *(model, name) {
  let result = {};
  yield model.find({username: name}, function(err, res) {
    try{
      if(err){
        throw new Error(err);
      }
    }catch(e){
      result.success = false;
      result.message = e.message;
    }
    if(result.success !== false){
      result.success = true;
      result.message = '查找成功';
      result.data = res;
    }
  })
  return result;
}

let userIdentityVerify = function *(model, query) {
  let result = {};
  let res = yield userIsExist(model, query.username);

  try{
    if(res.success === false){
      throw new Error(res.message);
    }
    if(res.data){
      if(res.data.length === 0){
        throw new Error('用户不存在')
      }
    }else{
      throw new Error('数据异常');
    }
  }catch(e){
    result.success = false;
    result.message = e.message;
    result.data = null;
  }

  if(result.success !== false){
    if(res.data[0].password === query.password){
      result.success = true;
      result.message = '登录成功';
      result.data = res.data[0]
    }else{
      result.success = false;
      result.message = '密码错误';
    }
  }

  return result;
}

module.exports = {
  signIn: function *(next){
    if(this.session.token){
      this.redirect('/resume/mobile', {
        title: '移动端简历'
      })
    }else{
      this.render('login', {
        title: '登录'
      })
    }
    yield next
  },
  register: function *(next){
    let result = {},
        post = yield parse(this.request),
        username = post.username,
        password = post.password;

    try{
      if(username == '' || password == ''){
        throw new Error('用户名或密码不能空');
      }
      if(!(username.length >= 1 && username.length <= 10)){
        throw new Error('用户名请控制在1-10个字符内');
      }
      if(password.length < 6){
        throw new Error('密码不能少于6位')
      }
    }catch(e){
      result.message = e.message;
      result.success = false;
    }

    if(result.success !== false){
      let User = G.M('user'),
          data = {
            username: username,
            password: password,
            nick: '',
            head: '',
            type: 1
          }
      result = yield registerNewUser(User, data);
    }

    this.body = result;

    yield next
  },
  login: function *(next){
    let result = {},
        post = yield parse(this.request),
        username = post.username,
        password = post.password;

    try{
      if(username == '' || password == ''){
        throw new Error('用户名或密码不能空');
      }
      if(!(username.length >= 1 && username.length <= 10)){
        throw new Error('用户名请控制在1-10个字符内');
      }
      if(password.length < 6){
        throw new Error('密码不能少于6位')
      }
    }catch(e){
      result.message = e.message;
      result.success = false;
    }

    if(result.success !== false){
      let User = G.M('user');
      result = yield userIdentityVerify(User, {
        username: post.username,
        password: post.password
      })
    }

    if(result.success === true){
      let token = generateToken({username: result.data.username, password: result.data.password});
      let sessionId = result.data._id;
      yield setUserData(this, sessionId, token);
      this.session.token = token;
      this.session.username = username;
    }

    this.body = result;

    yield next
  }
}
