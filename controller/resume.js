"use strict"
const parse = require('co-body');

let queryResume = function *(model, query) {
  let result = {};
  yield model.find(query, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.data = res;
      result.message = '查找成功';
    }
  });
  return result
}

let findMainResume = function *(model, name) {
  let result = {};
  yield model.find({
    username: name,
    main: 1
  }, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.data = res[0];
      if(res && res.length > 0){
        result.message = '已找到主简历';
        result.state = 1;
      }else{
        result.message = '未设置主简历';
        result.state = 0;
      }
    }
  });
  return result
}

let findUserResume = function *(model, query) {
  let result = {};
  yield model.find(query, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.data = res;
      if(res && res.length > 0){
        result.message = '查找简历成功';
      }else{
        result.message = '暂无简历，立即添加';
      }
    }
  });
  return result
}

let createResume = function *(model, data) {
  let result = {};
  yield model.create(data, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.message = '创建简历成功！';
      result.data = res._doc;
    }
  });
  return result;
}

let saveResume = function *(model, query, data) {
  let result = {};
  let res = yield model.where(query).update({$set: data})
  if(res.ok === 1){
    result.success = true;
    result.message = '保存成功！'
    result.data = res.n;
  }else{
    result.success = false;
    result.message = '保存失败！'
    result.data = null;
  }
  return result;
}

module.exports = {

  mobile: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('lab/resume-mobile', {
      title: '移动端简历'
    })
    yield next
  },

  query: function *(next){
    let Resume = G.M('resume');
    let result = yield queryResume(Resume, this.query);

    this.body = result;
    yield next
  },

  list: function *(next) {
    let result = {};
    let name = this.query.username;
    if(name){
      let Resume = G.M('resume');
      result = yield findUserResume(Resume, name);
    }else{
      result.success = false;
      result.message = '参数异常';
      result.data = null;
    }

    this.body = result
    yield next
  },

  main: function *(next) {
    let result = {};
    let _id = this.query._id;
    let name = this.query.username;
    if(_id && name){
      let Resume = G.M('resume');
      result = yield findMainResume(Resume, name);
      if(result.data){
        result =  yield saveResume(Resume, {_id: result.data._id}, {main: 0})
        if(result.success){
          result = yield saveResume(Resume, {_id: _id}, {main: 1})
        }
      }
    }else{
      result.success = false;
      result.message = '参数异常';
      result.data = null;
    }

    this.body = result
    yield next
  },

  save: function *(next){
    let result = {};
    let post = yield parse(this.request);
    let text = post.text;
    let id = post.id;
    let Resume = G.M('resume');
    let query = {
      _id: id
    }
    let data = {
      text: text,
      updateDate: new Date
    };
    if(id && text){
      result = yield saveResume(Resume, query, data);
    }

    this.body = result;
    yield next
  },

  create: function *(next){
    let result = {};
    let post = yield parse(this.request);
    let name = post.name;
    let text = post.text;
    if( name && text ){
      let Resume = G.M('resume');
      let data = {
        username: name,
        text: text,
        createDate: new Date,
        updateDate: new Date,
        title: post.title || `${name}的简历`
      }
      result = yield findMainResume(Resume, data.username);
      if(result.success){
        if(result.state === 0){
          data.main = 1;
        }else{
          data.main = 0;
        }
        result = yield createResume(Resume, data);
      }
    }else{
      result.success = false;
      result.message = '参数异常';
    }

    this.body = result
    yield next
  }
}
