"use strict"
const fs = require("fs");

module.exports = {
  index: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('index',{
      title: '逸轩的博客',
      data: {
        msg: '1',
        smile: ':)'
      }
    })
    yield next
  },

  center: function *(next){
    if(this.session.token && this.session.username === 'thomasyxy'){
      this.render('center', {
        title: '文章上传'
      })
    }else{
      this.render('login', {
        title: '登录'
      })
    }

    yield next
  },

  getInitData: function *(next){
    this.body = {
      "success": true,
      "message": 0,
      "data": {
      }
    }

    yield next
  }
}
