var gulp = require('gulp');
var jslint = require('gulp-jslint');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('app')
            .pipe(webserver({
                open: true
            }));
});

gulp.task('jslint', function () {
  return gulp.src(['./scripts/*.js'])
      .pipe(jslint({
        vars: true,
        unparam: true,
        nomen: true,
        white: true,
        errorsOnly: false,
        plusplus: true,
        bitwise: true,
        todo: true,
        browser: true,
        devel: true
      }));
});

gulp.task('default', ['jslint']);
