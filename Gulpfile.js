var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');
var gulp = require('gulp');
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

gulp.task('default', ['css', 'connect', 'watch']);

gulp.task('watch', function () {
  gulp.watch('assets/sass/**/*.scss', ['css']).on('change', function () {
    browserSync.reload();
  });

  gulp.watch('site/**/*.php').on('change', function () {
    browserSync.reload();
  });
});
