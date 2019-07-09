'use strict'

const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')
const sorting = require('postcss-sorting')
const sortingConfig = require('../CSSSortConfig.json')
const cache = require('gulp-cached')
const beautify = require('gulp-jsbeautifier');

module.exports = (gulp, path) => {

  let assetsTask = ['assets:html', 'assets:sass-sort', 'assets:sass', 'assets:js'];

  gulp.task('assets:html', done => {
    return gulp.src('../src/**/*.html', {base: './'})
      .pipe(cache('assets:html'))
      .pipe(beautify({ indent_size: 2 }))
      .pipe(cache('assets:html'))
      .pipe(gulp.dest('./'))

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
      .pipe(cleanCSS({
        compatibility: 'ie8'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(`${path.src}/styles/`))

    done()
  })

  gulp.task('assets:sass-sort', done => {
    let processors = [
      sorting(sortingConfig)
    ]

    return gulp.src(['../src/styles/**/*.scss', '!../src/styles/main.scss', '!../src/styles/utils/*.scss', '!../src/styles/vendors/**/*.scss'], {base: './'})
      .pipe(cache('assets:sass-sort'))
      .pipe(postcss(processors, { syntax: require('postcss-scss') }))
      .pipe(beautify({ indent_size: 2 }))
      .pipe(cache('assets:sass-sort'))
      .pipe(gulp.dest('./'))

    done()
  })

  gulp.task('assets:js', done => {
    return gulp.src(`${path.baseURL}/**/*.js`)

    done()
  })

  gulp.task('assets', gulp.parallel(assetsTask, done => done()))

}
