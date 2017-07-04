"use strict"
module.exports = {
  index: function *(next) {
    this.render('lab/bookstore', {
      title: '图书馆'
    })
  }
}
