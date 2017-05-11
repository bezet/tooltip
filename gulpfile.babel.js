// import gulp from 'gulp';
// import sass from 'gulp-sass';
// import rename from 'gulp-rename';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import sourcemaps from 'gulp-sourcemaps';

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
  scssFiles: [
    `${this.src}/*/*.scss`,
    `${this.src}/*.scss`
  ],
  cssDest: `${this.dist}/`,
  demoFiles: [
    `${this.dist}/Tooltips.js`,
    `${this.dist}/tooltip.css`
  ]
};


// TASKS

gulp.task('build:css', () => {
  const sassOptions = {
    includePaths: ['node_modules'],
    outputStyle: 'compressed'
  };

  const postcssPlugins = [
    autoprefixer({ browsers: '> 5%, ie 9' })
  ];

  return gulp.src(paths.scssFiles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('watch:scss', ['build:css'], () => {
  gulp.watch(paths.scssFiles, ['build:css']);
});

gulp.task('update:dist', () => {
  return gulp.src(`${paths.dist}/*.css`)
    .pipe(rename({
      prefix: '_',
      extname: '.scss'
    }))
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('update:demo', () => {
  return gulp.src(paths.demoFiles)
    .pipe(gulp.dest(paths.demo));
});


// GROUPING TASKS

gulp.task('watch:all', ['build:css'], () => {
  gulp.watch(paths.scssFiles, ['watch:scss']);
});

gulp.task('default', ['watch:all']);
