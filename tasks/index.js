'use strict'

const gulp = require('gulp')

const path = {
  baseUrl: process.env.PWD,
  src: process.env.PWD + '/src/',
  dist: process.env.PWD + '/dist/',

  sass: {
    outputStyle: 'compressed',
    includePaths: []
  },

  sources: {
    sass: [
      process.env.PWD + '/src/styles/main.scss'
    ]
  }
}

require('./serve')(gulp, path)
require('./assets')(gulp, path)

gulp.task('default', gulp.series(
  gulp.parallel(
    'assets'
  ),
  'serve',

  done => done()
))