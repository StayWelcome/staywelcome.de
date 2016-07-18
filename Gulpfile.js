var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');
var gulp = require('gulp');

gulp.task('connect', function () {
  connect.server({}, function () {
    browserSync();
  });
});

gulp.task('default', ['connect', 'watch']);

gulp.task('watch', function () {
  gulp.watch('site/**/*.php').on('change', function () {
    browserSync.reload();
  });
});
