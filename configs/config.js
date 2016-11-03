"use strict";

var Config = {
  'development': {
    port: 3000,
    staticPath: '/static',
    static2: '/dist',
    host: 'http://local.yinxueyuan.com'
  },
  'test': {
    port: 3000,
    staticPath: '/static',
    static2: '/dist',
    host: 'http://test.yinxueyuan.com'
  },
  'production': {
    port: 3000,
    staticPath: '/static',
    static2: '/dist',
    host: 'http://www.yinxueyuan.com'
  }
};

module.exports = Config;
