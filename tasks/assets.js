'use strict'

const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
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
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
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