"use strict"
const fs = require('fs');
const path = require('path');
const Remarkable = require('remarkable');
const md = new Remarkable('full');

function generateArticleList(dir) {
  let files = fs.readdirSync(`${dir}/md/`);
  let MyArticle = G.M('MyArticle');
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
      let html = md.render(txt.toString());

      let article = new MyArticle({
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



module.exports = {
  getTitle: function(){
    this.body = {
      "title": "yixuan's blog"
    }
  },
  md2html: function *(next){
    const ARTICLE_PATH = path.resolve(__dirname, '../public/source');
    console.log(ARTICLE_PATH);
    let result = generateArticleList(ARTICLE_PATH);

    this.body = result
    yield next
  }
}
