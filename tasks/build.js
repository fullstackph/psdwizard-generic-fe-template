const gulp = require('gulp')

gulp.task('default', gulp.series(
  gulp.parallel(
    console.log('build')
  ),
  done => done()
))