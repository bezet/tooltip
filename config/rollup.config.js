import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/Tooltips.js',
  format: 'umd',
  moduleName: 'Tooltips',
  plugins: [
    commonjs(),
    nodeResolve( { module: true, jsnext: true, main: true, browser: true } ),
    babel( {
      exclude: 'node_modules/**'
    } )
  ],
  dest: 'dist/Tooltips.js',
  sourceMap: true
};
