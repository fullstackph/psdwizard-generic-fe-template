'use strict'

const browserSync = require('browser-sync').create()

module.exports = (gulp, path) => {

  gulp.task('reload', done => {
    browserSync.reload()

    done => done()
  })
  
  gulp.task('serve', done => {
    browserSync.init({
      notify: false,
      server: path.baseUrl + '/src/',
      port: 3000
    })

    gulp.watch([path.baseUrl + '/src/**/*.html'])
      .on('all', gulp.series('assets:html', 'reload'))

    done => done()
  })

}