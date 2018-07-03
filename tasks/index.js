'use strict'

const gulp = require('gulp')

const path = {
  baseUrl: process.env.PWD
}

// import serve from './tasks/serve.js'
require('./serve')(gulp, path)
require('./assets')(gulp, path)

gulp.task('default', gulp.series(
  gulp.parallel(
    'assets'
  ),
  'serve',

  done => done()
))