"use strict"
const fs = require('fs');
const path = require('path');
const parse = require('co-body');

function userIdentityVerify(obj) {
  let User = G.M('user');
  User.findOne({
    username: obj.username
  }, function(err, post){
    if(err){
      return err;
    }
    if(obj.password === post.password){
      return {
        code: 0
      }
    }else{
      return false
    }
  })
}



module.exports = {
  register: function *(){
    this.body = {}

    yield next
  },
  login: function *(next){
    let post = yield parse(this.request);
    let loginRes = userIdentityVerify({
      username: post.username,
      password: post.password
    })

    if(loginRes && loginRes.code === 0){
      // setUserInfo(this, )
    }

    this.body = result
    yield next
  }
}
