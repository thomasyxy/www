"use strict";
var evn = process.env.NODE_ENV || 'develpoment';
const path = require('path');
const os = require('os');
const network = os.networkInterfaces();

const proList = ['114.215.158.62'];
const testList = ['121.42.87.86'];

//环境判断
for (var key in network){
  var ip = network[key];
  for(var i = 0; i < ip.length; i++){
    if(proList.indexOf(ip[i].address) > -1){
      evn = 'production';
    }else if(testList.indexOf(ip[i].address > -1)){
      evn = 'test';
    }
  }
}

var root = path.resolve(__dirname, '..');

var Config = {
  'development': {
    port: 3000,
    staticPath: '/static',
    static2: '/dist',
    host: 'http://local.yinxueyuan.com',
    apiProxy: {
      apiServer: 'http://app-server-test.yinxueyuan.com',
      cson: path.join(root, 'configs/model.cson'),
      mock: path.join(root, 'mock')
    }
  },
  'test': {
    port: 3000,
    staticPath: '/static',
    static2: '/dist',
    host: 'http://test.yinxueyuan.com',
    apiProxy: {
      apiServer: 'http://app-server-test.yinxueyuan.com',
      cson: path.join(root, 'configs/model.cson'),
      mock: path.join(root, 'mock')
    }
  },
  'production': {
    port: 3000,
    staticPath: '/static',
    static2: '/dist',
    host: 'http://www.yinxueyuan.com',
    apiProxy: {
      apiServer: 'http://app-server.yinxueyuan.com',
      cson: path.join(root, 'configs/model.cson'),
      mock: path.join(root, 'mock')
    }
  }
};

Config[evn].evn = evn;
Config[evn].root = root;

module.exports = Config[evn];
