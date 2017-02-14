"use strict"
const parse = require('co-body');

let queryResume = function *(model, data) {
  let result = {};
  yield model.find(data, function(err, res) {
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
      result.data = res;
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

let findUserResume = function *(model, name) {
  let result = {};
  yield model.find({
    username: name
  }, function(err, res) {
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

let saveResume = function *(model, data) {
  let result = {};
  yield model.create(data, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.message = '数据保存成功！';
      result.data = res._doc;
    }
  });
  return result;
}

function setMainResume(name, id) {
  let mainResume = findMainResume(name);

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
    let data = this.query;
    let result = yield queryResume(Resume, data);

    this.body = result;
    yield next
  },

  save: function *(next){
    let result = {};
    let post = yield parse(this.request);
    let name = post.username;
    let code = post.code;
    if( name && code ){
      let Resume = G.M('resume');
      let data = {
        username: name,
        text: code,
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
        result = yield saveResume(Resume, data);
      }
    }else{
      result.success = false;
      result.message = '参数异常';
    }

    this.body = result
    yield next
  },

  list: function *(next) {
    let result = {};
    let name = this.query.username;
    if(name){
      let Resume = G.M('resume');
      result = yield findUserResume(Resume, name);
    }

    this.body = result
    yield next
  }
}
