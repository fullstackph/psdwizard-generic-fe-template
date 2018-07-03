'use strict'

const browserSync = require('browser-sync').create()

module.exports = (gulp, path) => {
  
  gulp.task('serve', done => {
    browserSync.init({
      notify: false,
      server: path.baseUrl,
      port: 3000
    })

    done => done()
  })

}