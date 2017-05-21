const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');


// PATHS

const paths = {
  src: 'src',
  dist: 'dist',
  demo: 'docs',
  stylesSrc: [
    `src/*/*.scss`,
    `src/*.scss`
  ],
  stylesDest: `dist/`,
  demoSrc: [
    `dist/Tooltips.js`,
    `dist/tooltip.css`
  ]
};


// TASKS

gulp.task('build:styles', () => {
  const sassOptions = {
    includePaths: ['node_modules'],
    outputStyle: 'compressed'
  };

  const postcssPlugins = [
    autoprefixer({ browsers: '> 5%, ie 9' })
  ];

  return gulp.src(paths.stylesSrc)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.stylesDest))
    .pipe(filter('**/*.css'))
    .pipe(rename({
      prefix: '_',
      extname: '.scss'
    }))
    .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('watch:styles', ['build:styles'], () => {
  gulp.watch(paths.stylesSrc, ['build:styles']);
});

gulp.task('update:demo', () => {
  return gulp.src(paths.demoSrc)
    .pipe(gulp.dest(paths.demo));
});


// GROUPING TASKS

gulp.task('watch:all', ['build:styles'], () => {
  gulp.watch(paths.stylesSrc, ['watch:styles']);
});

gulp.task('default', ['watch:all']);
