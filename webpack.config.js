"use strict";
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackConfigDev = require('./webpack.config.dev')
const webpackConfigProd = require('./webpack.config.prod')

const webpackConfigBase = {
  entry: {
    app: path.resolve(__dirname, './src/home/index.js')
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
        test: /\.scss|.css$/,
        loaders: ['style', 'css', 'sass'],
        include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = {
  dev: merge(webpackConfigBase, webpackConfigDev),
  prod: merge(webpackConfigBase, webpackConfigProd)
}
