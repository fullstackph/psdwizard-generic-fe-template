'use strict'

const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

module.exports = (gulp, path) => {

  let assetsTask = ['assets:html', 'assets:sass', 'assets:js'];

  gulp.task('assets:html', done => {
    return gulp.src(path.baseURL + '/src/**/*.html')
      .pipe(gulp.dest(`${path.dist}`))

    done()
  })

  gulp.task('assets:sass', done => {
    return gulp.src(path.sources.sass)
      .pipe(sourcemaps.init())
      .pipe(sass(path.sass).on('error', () => {
        this.emit('end')
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 versions', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
        cascade: false
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(cssmin())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(`${path.src}/styles/`))

    done()
  })

  gulp.task('assets:js', done => {
    return gulp.src(`${path.baseURL}/**/*.js`)
    
    done()
  })

  gulp.task('assets', gulp.parallel(assetsTask, done => done()))

}