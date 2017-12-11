const path = require('path');
const webpack = require('webpack');
const packageInfo = require('../package.json');

const rootPath = '../';
const libName = packageInfo.name;

module.exports = {
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
      }
    ]
  }
};
