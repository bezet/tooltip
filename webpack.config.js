const path = require('path');
const webpack = require('webpack');

const rootPath = './';

module.exports = {
  watch: false,
  entry: path.resolve(__dirname, rootPath, 'src/Tooltips.js'),
  output: {
    path: path.resolve(__dirname, rootPath, 'dist'),
    filename: 'bundle.js',
    library: 'Tooltips',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    })
  ]
};