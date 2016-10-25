"use strict"

module.exports = {
  index: function *(next){
    console.log(123)
    // var data = yield this.fetch('home_data', {}, {})
    this.body = {
      view: 'home/index',
      data: 'data'
    }
  }
}
