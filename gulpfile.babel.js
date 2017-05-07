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

const basePaths = {
  src: 'src',
  dist: 'dist',
  demo: 'docs'
};

const paths = {
  scssFiles: [
    `${basePaths.src}/*/*.scss`,
    `${basePaths.src}/*.scss`
  ],
  cssDest: `${basePaths.dist}/`,
  demoFiles: [
    `${basePaths.dist}/Tooltips.js`,
    `${basePaths.dist}/tooltip.css`
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
  return gulp.src(`${basePaths.dist}/*.css`)
    .pipe(rename({
      prefix: '_',
      extname: '.scss'
    }))
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('update:demo', () => {
  return gulp.src(paths.demoFiles)
    .pipe(gulp.dest(basePaths.demo));
});


// GROUPING TASKS

gulp.task('watch:all', ['build:css'], () => {
  gulp.watch(paths.scssFiles, ['watch:scss']);
});

gulp.task('default', ['watch:all']);
