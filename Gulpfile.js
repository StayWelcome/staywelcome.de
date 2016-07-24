var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var connect = require('gulp-connect-php');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('connect', function () {
  connect.server({}, function () {
    browserSync();
  });
});

gulp.task('css', function () {
  return gulp.src('assets/sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('assets'));
});

gulp.task('default', ['css', 'js', 'connect', 'watch']);

gulp.task('js', function () {
  return gulp.src('assets/js/**/*.js')
      .pipe(jshint())
      .pipe(concat('script.js'))
      .pipe(gulp.dest('assets'));
});

gulp.task('watch', function () {
  gulp.watch('assets/js/**/*.js', ['js']).on('change', function () {
    browserSync.reload();
  });

  gulp.watch('assets/sass/**/*.scss', ['css']).on('change', function () {
    browserSync.reload();
  });

  gulp.watch('site/**/*.php').on('change', function () {
    browserSync.reload();
  });
});
