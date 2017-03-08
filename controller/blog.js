"use strict"
const fs = require('fs');
const path = require('path');
const Remarkable = require('remarkable');
const md = new Remarkable('full');
const parse = require('co-body');

function generateArticleList(dir) {
  let files = fs.readdirSync(`${dir}/md/`);
  let article = G.M('article');
  let result = {
    success: 0,
    fail: 0
  }
  for (let file in files) {
    let file_name = files[file];
    let file_title = file_name.substr(0,file_name.length - 3);

    if (file_name.substr(file_name.length - 3) === ".md") {
      console.log("File: " + file_name + " found!");
      let txt = fs.readFileSync(`${dir}/md/${file_name}`);
      let html = executeMd2html(txt.toString)

      let article = new article({
        title: file_title,
        content: html
      });
      article.save(function (err) {
        result.fail++
      });

      fs.writeFileSync(`${dir}/html/${file_title}.html`,html);

      console.log(`File:
              ${file_name.substr(0,file_name.length - 3)}
              .html Write Success!`)

      result.success++
    }
  }

  return result;
}

function executeMd2html(txt) {
  return md.render(txt);
}

let createArticle = function *(model, data) {
  let result = {};
  yield model.create(data, function(err, res) {
    if(err){
      result.success = false;
      result.message = err;
    }else{
      result.success = true;
      result.message = '上传成功！';
      result.data = res._doc;
    }
  });
  return result;
}

module.exports = {
  getTitle: function(){
    this.body = {
      "title": "yixuan's blog"
    }
  },

  md2html: function *(next){
    let post = yield parse(this.request);
    let mdString = post.mdString;
    let html = executeMd2html(mdString);
    this.body = {
      success: true,
      msg: '',
      data: {
        html: html
      }
    }
    yield next
  },

  create: function *(next){
    let result = {},
        post = yield parse(this.request),
        name = this.session.username,
        title = post.title,
        text = post.text;

    if( name === 'thomasyxy' && title && text ){
      let Article = G.M('article');
      let data = {
        title: title,
        content: text,
        like: post.like || 0,
        cover: post.cover || '',
        type: post.type || '',
        theme: post.type || 'normal',
        createDate: Date.parse(new Date),
        updateDate: Date.parse(new Date),
        tag: []
      }
      result = yield createArticle(Article, data);
    }else{
      result.success = false;
      result.message = '参数异常';
    }

    this.body = result
    yield next
  },

  list: function *(next) {
    let result = {},
        page = this.query.page,
        num = 5;
        Article = G.M('resume');
    let res = yield Article.find().skip(page * num).limit(page);
    result.data = {
      list: res,
      page: page
    }
    if(result.data.list){
      result.success = true;
      result.message = result.data.list.length === 0 ? '显示更多' : '暂无更多';
    }else{
      result.success = false;
      result.message = '数据异常';
    }

    this.body = result;
    yield next
  }


}
