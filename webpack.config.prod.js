const webpack = require('webpack')
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')

module.exports = {
  devtool: 'cheap-source-map',
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, './dist'),
    filename: 'static/js/bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
