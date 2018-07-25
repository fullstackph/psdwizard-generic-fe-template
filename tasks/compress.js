'use strict'

const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const concat =  require('gulp-concat')
const jsmin = require('gulp-jsmin')
const clean = require('gulp-clean')

module.exports = (gulp, path) => {

  const parallelTasks = ['build:image']
  const seriesTasks = ['build:concatjs']

  gulp.task('build:image', done => {
    return gulp.src(`${path.src}assets/images/**/*`)
      .pipe(imagemin({
        progressive: true,
        optimizationLevel: 7
      }))
      .pipe(gulp.dest(`${path.dist}assets/images/`))

    done()
  })

  gulp.task('build:concatjs', done => {
    return gulp.src(`${path.src}/scripts/**/*`)
      .pipe(concat('bundle.js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(`${path.dist}scripts/`))

    done()
  })

  // gulp.task('build:minjs', done => {
  //   return gulp.src(`${path.dist}/scripts/bundle.js`)
  //     .pipe(jsmin())
  //     .pipe(rename({suffix: '.min'}))
  //     .pipe(gulp.dest(`${path.dist}/scripts/`))
      
  //   done()
  // })

  // gulp.task('build:delconcatjs', done => {
  //   return gulp.src(`${path.dist}scripts/bundle.js`, { read: false})
  //     .pipe(clean())

  //   done()
  // })

  gulp.task('build:compress', gulp.series(
    gulp.parallel(
      parallelTasks
    ),
    seriesTasks,

    done => done()
  ))
}