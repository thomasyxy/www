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
  },

  getInitData: function *(next){
    this.body = {
      navlist: [
        {
          a: 1
        },
        {
          b: 2
        }
      ]
    }
    yield next
  }
}
