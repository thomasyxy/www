"use strict"

module.exports = {
  index: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('index',{
      data: {
        msg: 'hello world',
        smile: ':)'
      }
    })
    yield next
  }
}
