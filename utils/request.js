"use strict"
const request = require('request');
const Q = require('q');
const merge = require('merge');
const cson = require('cson');
const cjson = require('cjson');
const URL = require('url');
const path = require('path');
const fs = require('fs');


module.exports = function(options){
  var M = {};
  if(options.cson){
    var _model = cson.load(options.cson);
    merge(M, _model);
  }

  var fetch = function(name, data, params){
    var params = params || {};
    var deferred = Q.defer();
    var mockFile = path.join(options.mock, name + '.json');
    if((G.C.evn === "develpoment") && M[name]["mockData"]){
      var data = cjson.load(mockFile);
      deferred.resolve(data);
      return deferred.promise;
    }
    var api = M[name].apiServer;

    var urlPath = URL.parse(M[name]["url"]).pathname;
    var protocol = URL.parse(M[name]["url"]).protocol;

    var url = protocol ? options['apiServer'] + urlPath : urlPath;

    var opt = {
      method: M[name]['method'],
      url: url,
      timeout: M.timeout || 5000,
      headers: {
          "Accept": "text/html,application/json, text/plain,*/*",
          "Accept-Charset": "utf-8",
          "Connection": "Keep-Alive"
      }
    };
    if(params.headers){
      for(var key in params.headers){
        opt.headers[key] = params.req.headers[key];
      }
    }
    if(M[name]["withCookie"] && params.req && params.req.headers && params.req.headers.cookie){
      opt.headers.Cookie = params.req.headers.cookie;
    }
    if(M[name]["method"] != "get"){
      opt.json = true;
      opt.body = data;
    }else{
      opt.json = true;
      var search = "?";
      for(var key in data){
        search += key + "="+ data[key]+"&";
      }
      opt.url += search.substring(0, search.length-1);
    }

    request(opt, function(err, res, body){
      if(err){
        console.log("*******************[request error]*******************");
        console.log(err);
        console.log(opt);
      }
      deferred.resolve(body);
      if(!fs.existsSync(mockFile)){
        console.log(options.mock);
        fs.writeFile(path.join(options.mock, name + '.json'),JSON.stringify(body));
      }
    });
  }

  return {
    fetch: fetch,
    middleWare: function(app){
      app.use(function*(next){
        var self = this;
        this.fetch = function(name, data, params){
          var params = params || {};
          params.req = self.req;
          return fetch(name, data, params);
        };
      });
    }
  }
}
