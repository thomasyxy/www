"use strict";
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackConfigDev = require('./configs/webpack-config/dev')
const webpackConfigBuild = require('./configs/webpack-config/build')

const webpackConfigBase = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'style-loader!css-loader'
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
