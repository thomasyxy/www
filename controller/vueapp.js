"use strict"

module.exports = {
  jsonp: function *(next){
    var data = {'name': 'jifeng', 'company': 'taobao'};
    if (this.query && this.query.callback) {
      //console.log('请求2:'+params.query);
      var str =  this.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
      this.body = str;
    } else {
      this.body = JSON.stringify(data);
    }
    yield next
  },
  normal: function *(next){
    var data = 11;
    this.body = {
      a: data
    };
    yield next
  }
}
