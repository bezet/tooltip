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

const browserSyncInstance = browserSync.create();

const PRODUCTION = argv.production ? true : false;

// PATHS

const vHostURL = 'localhost';

const paths = {};

paths.root = '.';

paths.base = {
  src : `${paths.root}/src`,
  dest: `${paths.root}/dist`
};

paths.html = {
  src : [`${paths.base.src}/templates/*{.html,/*.html}`],
  dest:  `${paths.base.dest}`
};

paths.js = {
  src    : [`${paths.base.src}/scripts/*{.js,/*.js}`],
  srcMain: [`${paths.base.src}/scripts/index.js`],
  dest   :  `${paths.base.dest}`
};

paths.styles = {
  src    : [`${paths.base.src}/scss/*{.scss,/*.scss}`],
  srcMain: [`${paths.base.src}/scss/main.scss`],
  dest   :  `${paths.base.dest}`
};

paths.images = {
  raster: [`${paths.base.src}/images/*.{png,jpg,gif}`],
  vector: [`${paths.base.src}/images/*.svg`],
  dest  :  `${paths.base.dest}/images`
};

paths.files = {
  src : [`${paths.base.src}/files/*`],
  dest:  `${paths.base.dest}/files`
};

// TASKS

gulp.task('argv-test', () => {
  console.log(argv);
});

gulp.task('build:templates', () => {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSyncInstance.reload({stream: true}));
});

gulp.task('build:js', () => {
  return gulp.src(paths.js.srcMain)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSyncInstance.reload({stream: true}));
});

gulp.task('watch:js', ['build:js'], () => {
  gulp.watch(paths.js.src, ['build:js']);
});

gulp.task('build:styles', () => {
  const sassOptions = {
    includePaths: ['node_modules'],
    outputStyle: 'compressed'
  };

  const postcssPlugins = [
    autoprefixer({ browsers: '> 5%, ie 9' })
  ];

  return gulp.src(paths.styles.srcMain)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(rename({
      basename: 'bundle'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSyncInstance.reload({stream: true}));
});

gulp.task('watch:styles', ['build:styles'], () => {
  gulp.watch(paths.styles.src, ['build:styles']);
});

gulp.task('images:raster', () => {
  return gulp.src(paths.images.raster)
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('images:vector', () => {
  return gulp.src(paths.images.vector)
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('images', ['images:raster', 'images:vector']);

gulp.task('files', () => {
  return gulp.src(paths.files.src)
    .pipe(gulp.dest(paths.files.dest));
});

// LOCAL SERVER

gulp.task('serve', ['build:all'], () => {
  const bsConfig = {
    server: {
      baseDir: "dist",
      index: "index.html",
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    },
    notify: false
  };

  browserSyncInstance.init(bsConfig);

  gulp.watch(paths.styles.src, ['build:styles']);
  gulp.watch(paths.js.src, ['build:js']);
  gulp.watch(paths.html.src, ['build:templates']);
  // gulp.watch(paths.html.dest).on('change', browserSyncInstance.reload);
});

// GROUPING TASKS

gulp.task('build:all', ['build:templates', 'build:styles', 'build:js', 'images', 'files']);

gulp.task('watch:all', ['build:all'], () => {
  gulp.watch(paths.html.src, ['build:templates']);
  gulp.watch(paths.styles.src, ['build:styles']);
  gulp.watch(paths.js.src, ['build:js']);
});

gulp.task('default', ['serve']);
