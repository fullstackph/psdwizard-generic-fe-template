'use strict'

const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const concat =  require('gulp-concat')
const jsmin = require('gulp-jsmin')
const babel = require('gulp-babel')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const imageminGiflossy = require('imagemin-giflossy')

module.exports = (gulp, path) => {

  const parallelTasks = ['build:image']
  const seriesTasks = [ 'build:concatjs', 'build:vendorsJS']
  const vendorsJS = [`${path.src}scripts/vendors/jquery.min.js`, `${path.src}scripts/vendors/tether.min.js`, `${path.src}scripts/vendors/bootstrap.min.js`]

  gulp.task('build:image', done => {
    return gulp.src(`${path.src}assets/images/**/*`)
      .pipe(imagemin([
        // imageminPngquant({
        //   speed: 1,
        //   quality: 70
        // }),
        // imageminMozjpeg({
        //   quality: 50
        // }),
        // imageminGiflossy({
        //   optimizationLevel: 3,
        //   optimize: 3, //keep-empty: Preserve empty transparent frames
        //   lossy: 2
        // }),
        // imagemin.jpegtran({progressive: true}),
        // imagemin.optipng({optimizationLevel: 7}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: false},
          ]
        })
      ]))
      .pipe(gulp.dest(`${path.dist}assets/images/`))

    done()
  })

  gulp.task('build:vendorsJS', done => {
    return gulp.src(vendorsJS)
      .pipe(concat('bundle.js'))
      // .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(`${path.dist}scripts/`))

    done()
  })

  gulp.task('build:concatjs', done => {
    return gulp.src(`${path.src}scripts/**/*.js`)
      .pipe(babel())
      .pipe(concat('bundle.js'))
      // .pipe(jsmin())
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