"use strict"

module.exports = {
  index: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('index',{
      data: 'hello world'
    })
    yield next
  }
}
