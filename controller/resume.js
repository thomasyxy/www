"use strict"
const parse = require('co-body');

module.exports = {
  mobile: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('lab/resume-mobile',{
      title: '移动端简历'
    })
    yield next
  }
}
