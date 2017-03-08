'use strict';

const gulp  = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');

const browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('build-css', () => {
  return gulp.src('./src/styles/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(util.env.type === 'prod' || util.env.type === 'production' ? cssnano() : util.noop())
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('./public/styles/'))
    .pipe(browserSync.stream());
});

gulp.task('build-js', () => {
  return gulp.src(['./src/scripts/text.js', './src/scripts/app.js', './src/scripts/main.js'])
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(util.env.type === 'prod' || util.env.type === 'production' ? uglify() : util.noop())
    .pipe(gulp.dest('./public/scripts/'));
});

gulp.task('serve', ['build-js', 'build-css'], () => {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });

  gulp.watch('./src/scripts/**/*.js', ['build-js', browserSync.reload]);
  gulp.watch('./src/styles/**/*.scss', ['build-css']);
  gulp.watch('./public/*.html', browserSynBc.reload);
  gulp.watch('./public/assets/lang/*.json', browserSync.reload);
});
