"use strict"
const parse = require('co-body');
const Remarkable = require('remarkable');
const md = new Remarkable('full');

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
      result.data = res;
      if(res && res.length > 0){
        result.message = '已找到主简历';
        result.state = 0;
      }else{
        result.message = '未设置主简历';
        result.state = 1;
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
  let res = yield model.where(query).update({$set: data});
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

let deleteResume = function *(model, query) {
  let result = {};
  yield model.remove(query, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.message = '删除成功';
    }
  })
  return result
}

let resetMainResume = function *(model, query) {
  let result = {};
  let resumes = yield model.where(query).sort({updateDate: -1}).limit(1);
  if(resumes.length > 0){
    let res = yield resumes[0].update({$set: {main: 1}})
    if(res.ok === 1){
      result.success = true;
      result.message = '保存成功！'
      result.data = res.n;
    }else{
      result.success = false;
      result.message = '保存失败！'
      result.data = null;
    }
  }
  return result
}

module.exports = {
  index: function *(next) {
    let _id = this.query._id,
        Resume = G.M('resume'),
        resume = yield Resume.find({_id: _id});

    let data = resume[0] ? {
      title: resume[0].title,
      html: md.render(resume[0].text),
      createDate: resume[0].createDate,
      updateDate: resume[0].updateDate
    } : {
      title: '未找到该简历'
    }

    this.render('lab/resume', data)
  },
  mobile: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    if(this.session.token){
      this.render('lab/resume-mobile', {
        title: 'MD简历盒子'
      })
    }else{
      this.redirect('/signIn', {
        title: '登录'
      })
    }
    yield next
  },

  list: function *(next) {
    let result = {},
        name = this.session.username;
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
  getMain: function *(next) {
    let result = {},
        name = this.session.username,
        Resume = G.M('resume');
    result = yield findMainResume(Resume, name);

    this.body = result;
    yield next
  },
  setMain: function *(next) {
    let result = {},
        _id = this.query._id,
        name = this.session.username;
    if(_id && name){
      let Resume = G.M('resume');
      result = yield findMainResume(Resume, name);
      if(result.data && result.data.length > 0){
        result =  yield saveResume(Resume, {_id: result.data[0]._id}, {main: 0})
        if(result.success){
          result = yield saveResume(Resume, {_id: _id}, {main: 1})
          result.message = "设置主简历成功";
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

  delete: function *(next){
    let result = {},
        _id = this.query._id,
        name = this.session.username;

    if(_id){
      let Resume = G.M('resume');
      let query = {
        _id: _id
      };

      result = yield deleteResume(Resume, query);

      if(result.success){
        yield resetMainResume(Resume, {username: name});
      }
    }


    this.body = result
    yield next
  },

  save: function *(next){
    let result = {},
        post = yield parse(this.request),
        text = post.text,
        id = post.id;

    if(id && text){
      let Resume = G.M('resume');
      let query = {
        _id: id
      };
      let data = {
        text: text,
        updateDate: Date.parse(new Date)
      };
      result = yield saveResume(Resume, query, data);
    }

    this.body = result;
    yield next
  },

  create: function *(next){
    let result = {},
        post = yield parse(this.request),
        name = this.session.username,
        text = post.text;

    if( name && text ){
      let Resume = G.M('resume');
      let data = {
        username: name,
        text: text,
        createDate: Date.parse(new Date),
        updateDate: Date.parse(new Date),
        title: post.title || `${name}的简历`,
        main: 0
      }
      result = yield findMainResume(Resume, data.username);
      if(result.data && result.data.length === 0){
        data.main = 1;
      }
      result = yield createResume(Resume, data);
    }else{
      result.success = false;
      result.message = '参数异常';
    }

    this.body = result
    yield next
  }
}
