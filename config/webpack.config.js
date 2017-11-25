const path = require('path');
const webpack = require('webpack');

const rootPath = '../';
const libName = 'Tooltip';

module.exports = {
  watch: true,
  cache: true,
  entry: path.resolve(__dirname, rootPath, `src/${libName}.js`),
  output: {
    path: path.resolve(__dirname, rootPath, 'dist'),
    filename: `${libName}.js`,
    library: `${libName}`,
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
};
