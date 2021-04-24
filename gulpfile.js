const gulp = require('gulp');
const svg = require('gulp-svg-sprite');

gulp.task('svg', function () {
  return gulp.src('./public/svg/*.svg')
    .pipe(svg({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      },
    }
    ))
    .pipe(gulp.dest('./public/'));
});