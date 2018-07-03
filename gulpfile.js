'use strict'

const gulp = require('gulp')

const path = {
  baseUrl: process.cwd()
}

// import serve from './tasks/serve.js'
require('./tasks/serve')(gulp, path)

gulp.task('default', gulp.series(
  'serve',

  done => done()
))