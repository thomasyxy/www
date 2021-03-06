"use strict";
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackConfigDev = require('./webpack.config.dev')
const webpackConfigProd = require('./webpack.config.prod')

const webpackConfigBase = {
  entry: {
    index: path.resolve(__dirname, './src/pages/home/index.js'),
    center: path.resolve(__dirname, './src/pages/center/index.js'),
    login: path.resolve(__dirname, './src/pages/login/index.js'),
    resume_mobile: path.resolve(__dirname, './src/pages/resume-mobile/index.js'),
    bookstore: path.resolve(__dirname, './src/pages/bookstore/index.js')
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
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
}

module.exports = {
  dev: merge(webpackConfigBase, webpackConfigDev),
  prod: merge(webpackConfigBase, webpackConfigProd)
}
