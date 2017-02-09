const path = require('path')
const webpack = require('webpack')

module.exports = {

  output: {
    publicPath: '/static',
    path: path.resolve(__dirname, './static'),
    filename: 'js/[name].js'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new webpack.HotModuleReplacementPlugin()
  ]
};
