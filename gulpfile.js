// Get gulp
'use strict';
var gulp = require('gulp');

// Install dependencies
var sass = require('gulp-sass');
var gulpBrowser = require("gulp-browser");

gulp.task('gulpBrowserTest',function() {
    var stream = gulp.src('./test/*.js')
        .pipe(gulpBrowser.browserify())
        .pipe(gulp.dest("./test/browserifiedJS/"));
    return stream;
});

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
