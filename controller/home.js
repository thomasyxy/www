"use strict"

module.exports = {
  index: function *(next){
    var data = yield this.fetch('home_data', {}, {})
    this.body = {
      view: 'home/index',
      data: data
    }
  }
}
