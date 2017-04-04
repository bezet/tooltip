'use strict';

// import gulp from 'gulp';
// import rename from 'gulp-rename';
const gulp = require( 'gulp' );
const rename = require( 'gulp-rename' );

const distDir = 'dist';
const cssSrc = `${distDir}/*.css`;
// const jsSrc = `${distDir}/*.js`;

gulp.task( 'create:scss', () => {
  return gulp.src( cssSrc )
    .pipe( rename( {
      prefix: '_',
      extname: '.scss'
    } ) )
    .pipe( gulp.dest( distDir ) );
} );
