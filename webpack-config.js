"use strict";
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackConfigDev = require('./configs/webpack-config/dev')
const webpackConfigProd = require('./configs/webpack-config/prod')

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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = {
  dev: merge(webpackConfigBase, webpackConfigDev),
  prod: merge(webpackConfigBase, webpackConfigProd)
}
