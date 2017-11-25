const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const rootPath = '../';
const libName = 'Tooltip';

module.exports = {
  watch: true,
  cache: true,
  entry: path.resolve(__dirname, rootPath, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, rootPath, 'dist'),
    filename: `${libName}.js`,
    library: `${libName}`,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['babel-plugin-add-module-exports']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            "sass-loader"
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`${libName.toLowerCase()}.css`)
  ]
};
