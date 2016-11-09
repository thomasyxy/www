const path = require('path')

module.exports = {
  output: {
    publicPath: '/static',
    path: path.resolve(__dirname, './static'),
    filename: 'js/bundle.js'
  },
};
