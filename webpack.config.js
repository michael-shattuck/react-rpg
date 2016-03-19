var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var plugins = [
    new ExtractTextPlugin('[name].css')
]

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './lib/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        plugins: [
          'transform-decorators'
        ],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?modules&localIdentName=[hash:base64:5]')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?modules&localIdentName=[hash:base64:5]!sass')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      }
    ]
  },
  plugins: plugins
}
