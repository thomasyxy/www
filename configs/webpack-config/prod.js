var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  output: {
    filename: '[chunkhash:8].bundle.js',
    chunkFilename: '[id].[chunkhash].js'
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
