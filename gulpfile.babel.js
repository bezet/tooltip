'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import { argv } from 'yargs';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

import packageInfo from './package.json';

const PRODUCTION = argv.production ? true : false;
// const packageName = (packageInfo.name).match(/(?:@\w+\/)(\w+)/g);
const packageName = (packageInfo.name).split('/')[1];


// PATHS

const paths = {};

paths.root = '.';

paths.base = {
  src  : [`${paths.root}/src`],
  dest :  `${paths.root}/dist`,
  demo :  `${paths.root}/docs`
};

paths.js = {
  srcMain : [`${paths.base.src}/index.js`],
  src     : [`${paths.base.src}/lib/*{.js,/*.js}`],
  dest    :  `${paths.base.dest}`
};

paths.styles = {
  src    : [`${paths.base.src}/lib/*.scss`],
  dest   :  `${paths.base.dest}`
};

paths.demo = {
  html   : [`${paths.base.src}/demo/*{.html,/*.html}`],
  scss   : [`${paths.base.src}/demo/*{.scss,/*.scss}`],
  images : [`${paths.base.src}/demo/images/*.{png,jpg,gif,svg}`],
  libSrc :  `${paths.base.dest}`,
  dest   :  `${paths.base.demo}`
};



// CONFIGS

const browserSyncInstance = browserSync.create();
const bsConfig = require('./config/bs.config.js');

const webpackConfig = PRODUCTION ? './config/webpack.prod.js' : './config/webpack.dev.js';

const sassOptions = {};
sassOptions.includePaths = ['node_modules'];
sassOptions.outputStyle = PRODUCTION ? 'compressed' : 'expanded';

const postcssPlugins = [autoprefixer({ browsers: '> 5%, ie 9' })];



// TASKS

gulp.task('argv-test', () => {
  console.log(packageName);
  // console.log(argv);
});



// demo

gulp.task('demo:html', () => {
  return gulp.src(paths.demo.html)
    .pipe(gulp.dest(paths.demo.dest));
});

gulp.task('demo:styles', () => {
  return gulp.src(paths.demo.scss)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest(paths.demo.dest));
});

gulp.task('demo:lib', () => {
  return gulp.src(`${paths.demo.libSrc}/**/*`)
    .pipe(gulp.dest(`${paths.demo.dest}/dist`));
});

gulp.task('demo', ['demo:html', 'demo:styles', 'demo:lib']);



// scripts

gulp.task('build:js', () => {
  return gulp.src(paths.js.srcMain)
    .pipe(webpack(require(webpackConfig)))
    .pipe(gulp.dest(paths.js.dest));
});



// styles

gulp.task('build:styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(rename({
      basename: packageName
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
});



// local dev server

gulp.task('serve', ['watch'], () => {
  browserSyncInstance.init(bsConfig);
});



// other tasks

// gulp build [--production]
gulp.task('build', () => {
  runSequence(['build:js', 'build:styles'], 'demo');
});

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.js.srcMain.concat(paths.js.src), () => {
    runSequence('build:js', 'demo:lib');
  });

  gulp.watch(paths.styles.src, () => {
    runSequence('build:styles', 'demo:lib');
  });

  gulp.watch(paths.demo.html, ['demo:html']);
  gulp.watch(paths.demo.scss, ['demo:styles']);

  // gulp.watch(`${paths.demo.dest}/**/*`).on('change', browserSyncInstance.reload);
});

gulp.task('default', ['serve']);
