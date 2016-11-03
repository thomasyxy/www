"use strict";
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackConfigDev = require('./configs/webpack-config/dev')
const webpackConfigBuild = require('./configs/webpack-config/build')

console.log('dirname' + __dirname);
const webpackConfigBase = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    include: path.resolve(__dirname, './src'),
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = {
  dev: merge(webpackConfigBase, webpackConfigDev),
  build: merge(webpackConfigBase, webpackConfigBuild)
}
