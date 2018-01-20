import path from 'path';
import webpack from 'webpack';

const rootPath = '../';

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, rootPath, 'docs/scripts/main.js'),
  output: {
    path: path.resolve(__dirname, rootPath, 'docs'),
    filename: 'bundle.js',
    library: 'demoBundle',
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
  },
  watch: false,
  devtool: 'source-map'
};
