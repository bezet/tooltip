import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [
    commonjs(),
    nodeResolve( { module: true, jsnext: true, main: true, browser: true } ),
    babel( {
      exclude: 'node_modules/**'
    } )
  ],
  dest: 'dist/tooltip.js',
  sourceMap: true
};
