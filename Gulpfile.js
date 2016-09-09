var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var connect = require('gulp-connect-php');
var gulp = require('gulp');
var GulpSSH = require('gulp-ssh');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');

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
      .pipe(webpack(require('./webpack.config.js')))
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




var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: {
    host: process.env.DEPLOY_HOST,
    username: process.env.DEPLOY_USER,
    privateKey: process.env.DEPLOY_KEY
  }
});

gulp.task('deploy', [
  'css',
  'js',
  'deploy:assets',
  'deploy:content',
  'deploy:site'
]);


gulp.task('deploy:assets', function () {
  return gulp.src('assets/**/*')
      .pipe(gulpSSH.dest(process.env.DEPLOY_DIR + '/assets'));
});

gulp.task('deploy:content', function () {
  return gulp.src('content/**/*')
      .pipe(gulpSSH.dest(process.env.DEPLOY_DIR + '/content'));
});

gulp.task('deploy:site', function () {
  return gulp.src('site/**/*')
      .pipe(gulpSSH.dest(process.env.DEPLOY_DIR + '/site'));
});
