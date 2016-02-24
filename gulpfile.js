// Get gulp
'use strict';
// Install dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var sass = require('gulp-sass');
var gulpBrowser = require("gulp-browser");

// gulp.task('gulpBrowserTest', function() {
//   var stream = gulp.src('./test/*.js')
//     .pipe(gulpBrowser.browserify())
//     .pipe(gulp.dest("./test/browserifiedJS/"));
//   return stream;
// });

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// Watch our files
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: ['reactify'],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) {
      gutil.log('recompiling ' + file);
      return bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error')
          .pipe(source('main.js'))
          .pipe(gulp.dest('./')));
    }
  }

  build();
  bundler.on('update', build);
});









//
