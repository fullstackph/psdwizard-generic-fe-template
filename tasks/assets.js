'use strict'

module.exports = (gulp, path) => {
  
  let assetsTask = ['assets:html'];

  gulp.task('assets:html', done => {
    return gulp.src(path.baseURL + '/src/**/*.html')

    done => done()
  })

  gulp.task('assets', gulp.parallel(assetsTask, done => done()))

}