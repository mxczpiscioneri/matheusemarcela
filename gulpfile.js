var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
  return gulp.src('public/')
    .pipe(clean());
});

gulp.task('scripts', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/html5shiv/html5shiv.js',
      'bower_components/countdown/jquery.countdown.js',
      'bower_components/unveil/jquery.unveil.min.js',
      'bower_components/matchHeight/dist/jquery.matchHeight-min.js',
      'bower_components/backfix/index.js',
      'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
      'bower_components/owl.carousel/dist/owl.carousel.js',
      'bower_components/slicknav/dist/jquery.slicknav.js',
      'bower_components/sweetalert/dist/sweetalert.min.js',
      'js/*.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('styles', function() {
  return gulp.src([
      // 'bower_components/acsset/css/acsset.css',
      'bower_components/countdown/jquery.countdown.css',
      'bower_components/magnific-popup/dist/magnific-popup.css',
      'bower_components/owl.carousel/dist/assets/owl.carousel.css',
      'bower_components/slicknav/dist/slicknav.css',
      'bower_components/sweetalert/dist/sweetalert.css',
      'css/*.css'
    ])
    .pipe(concat('style.css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('images', function() {
  return gulp.src('img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img'));
});

gulp.task('watcher', function() {
  gulp.src('js/*.js')
    .pipe(watch('js/*.js', function(event) {
      gulp.run('lint');
      gulp.run('scripts');
    }));
  gulp.src('css/*.css')
    .pipe(watch('css/*.css', function(event) {
      gulp.run('styles');
    }));
  gulp.src('img/**/*')
    .pipe(watch('img/**/*', function(event) {
      gulp.run('images');
    }));
});

gulp.task('dev', function() { // start default tasks "gulp"
  return runSequence(['scripts', 'styles']);
});

gulp.task('default', function() { // start default tasks "gulp"
  return runSequence('lint', 'clean', ['scripts', 'styles', 'images']);
});

gulp.task('watch', ['watcher']); // start watcher task "gulp watch"
