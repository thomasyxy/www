"use strict"

module.exports = {
  index: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('index',{
      data: {
        evn: G.C.evn,
        msg: 'hello world',
        smile: ':)'
      }
    })
    yield next
  }
}
