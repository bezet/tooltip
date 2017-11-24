const path = require('path');
const webpack = require('webpack');

const rootPath = './';

module.exports = {
  watch: false,
  entry: path.resolve(__dirname, rootPath, 'src/Tooltips.js'),
  output: {
    path: path.resolve(__dirname, rootPath, 'dist'),
    filename: 'Tooltips.js',
    library: 'Tooltips',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false,
    //   }
    // })
  ]
};