var gulp = require('gulp');
var jslint = require('gulp-jslint');

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
        todo: true
      }));
});

gulp.task('default', ['jslint']);
