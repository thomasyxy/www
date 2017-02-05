"use strict"
const fs = require('fs');
const path = require('path');
const Remarkable = require('remarkable');
const md = new Remarkable('full');

function generate(dir) {
    let files = fs.readdirSync(`${dir}/md/`);
    for (file in files) {
        let file_name = files[file];

        if (file_name.substr(file_name.length - 3) === ".md") {
            console.log("File: " + file_name + " found!");
            let txt = fs.readFileSync(`${dir}/md/${file_name}`);
            let html = md.render(txt.toString());

            fs.writeFileSync(
                `${dir}/html/${file_name.substr(0,file_name.length - 3)}.html`,
                html);

            console.log(`File:
                    ${file_name.substr(0,file_name.length - 3)}
                    .html Write Success!`)
        }
    }
}



module.exports = {
  getTitle: function(){
    this.body = {
      "title": "yixuan's blog"
    }
  },
  md2html: function *(next){
    const ARTICLE_PATH = `${__dirname}/source`;
    console.log(ARTICLE_PATH);
    // yield generate('/source/md/');
    yield next
  }
}
