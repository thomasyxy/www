const webpack = require('webpack')
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')

module.exports = {
  devtool: 'cheap-source-map',
  output: {
    publicPath: '/public',
    path: path.resolve(__dirname, './public'),
    filename: 'static/js/[name].js'
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
