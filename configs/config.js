const path = require('path')

var Config = {
  'development': {
    port: 3000,
    staticPath: '/static',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    host: 'http://local.yinxueyuan.com'
  },
  'production': {
    port: 3000,
    staticPath: '/static',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    host: 'http://www.yinxueyuan.com'
  }
};

module.exports = Config;
