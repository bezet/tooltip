'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import eslint from 'gulp-eslint';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import { argv } from 'yargs';

const browserSyncInstance = browserSync.create();

const PRODUCTION = argv.production ? true : false;

// PATHS

const vHostURL = 'localhost';

const paths = {};

paths.root = '.';

paths.base = {
  src : `${paths.root}/src`,
  dest: `${paths.root}/dist`,
  demo: `${paths.root}/docs`
};

paths.html = {
  src    : [`${paths.base.src}/*{.html,/*.html}`]
};

paths.js = {
  src    : [`${paths.base.src}/*{.js,/*.js}`],
  srcMain: [`${paths.base.src}/Tooltips.js`],  
  dest   :  `${paths.base.dest}`
};

paths.styles = {
  src    : [`${paths.base.src}/scss/*{.scss,/*.scss}`],
  srcMain: [`${paths.base.src}/scss/tooltip.scss`],
  dest   :  `${paths.base.dest}`
};

// TASKS

gulp.task('argv-test', () => {
  console.log(argv);
});

gulp.task('lint:js', () => {
  return gulp.src(paths.js.src)
    .pipe(eslint({
      configFile: '.eslintrc.json'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build:js', ['lint:js'], () => {
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

// LOCAL SERVER

gulp.task('serve', ['build:all'], () => {
  const bsConfig = {
    server: {
      baseDir: "docs",
      index: "index.html",
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    },
    files: [
      "docs/*.html",
      "docs/*.css",
      "docs/*.js"
    ],
    notify: false
  };

  browserSyncInstance.init(bsConfig);

  gulp.watch(paths.styles.src, ['build:styles']);
  gulp.watch(paths.js.src, ['build:js']);
  gulp.watch(paths.html.src, ['build:templates']);
  // gulp.watch(paths.html.dest).on('change', browserSyncInstance.reload);
});

// GROUPING TASKS

gulp.task('build:all', ['build:styles', 'build:js']);

gulp.task('watch:all', ['build:all'], () => {
  gulp.watch(paths.styles.src, ['build:styles']);
  gulp.watch(paths.js.src, ['build:js']);
});

gulp.task('default', ['serve']);