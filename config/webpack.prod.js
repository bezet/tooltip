const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  watch: false,
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
});
