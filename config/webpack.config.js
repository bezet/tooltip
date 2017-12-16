import path from 'path';
import webpack from 'webpack';
import packageInfo from '../package.json';

const rootPath = '../';

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const pascalCase = (string) => {
  return string.split('-').map(word => capitalize(word)).join('');
};

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, rootPath, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, rootPath, 'dist'),
    filename: `${packageInfo.name}.js`,
    library: `${pascalCase(packageInfo.name)}`,
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
