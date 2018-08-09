'use strict'

const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const concat =  require('gulp-concat')
const jsmin = require('gulp-jsmin')
const babel = require('gulp-babel')

module.exports = (gulp, path) => {

  const parallelTasks = ['build:image']
  const seriesTasks = [ 'build:concatjs', 'build:vendorsJS']
  const vendorsJS = [`${path.src}scripts/vendors/jquery.min.js`, `${path.src}scripts/vendors/tether.min.js`, `${path.src}scripts/vendors/bootstrap.min.js`]

  gulp.task('build:image', done => {
    return gulp.src(`${path.src}assets/images/**/*`)
      .pipe(imagemin({
        progressive: true,
        optimizationLevel: 7
      }))
      .pipe(gulp.dest(`${path.dist}assets/images/`))

    done()
  })

  gulp.task('build:vendorsJS', done => {
    return gulp.src(vendorsJS)
      .pipe(concat('bundle.js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(`${path.dist}scripts/`))

    done()
  })

  gulp.task('build:concatjs', done => {
    return gulp.src(`${path.src}scripts/**/*.js`)
      .pipe(babel())
      .pipe(concat('bundle.js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(`${path.dist}scripts/`))

    done()
  })

  gulp.task('build:compress', gulp.series(
    gulp.parallel(
      parallelTasks
    ),
    seriesTasks,

    done => done()
  ))
}