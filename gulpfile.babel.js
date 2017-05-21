const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


// PATHS

const paths = {
  src: 'src',
  dist: 'dist',
  demo: 'docs',
  stylesSrc: [
    `${this.src}/*/*.scss`,
    `${this.src}/*.scss`
  ],
  stylesDest: `${this.dist}/`,
  demoSrc: [
    `${this.dist}/Tooltips.js`,
    `${this.dist}/tooltip.css`
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
    .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('watch:styles', ['build:styles'], () => {
  gulp.watch(paths.stylesSrc, ['build:styles']);
});

gulp.task('update:dist', () => {
  return gulp.src(`${paths.dist}/*.css`)
    .pipe(rename({
      prefix: '_',
      extname: '.scss'
    }))
    .pipe(gulp.dest(paths.stylesDest));
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
