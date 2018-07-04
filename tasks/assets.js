'use strict'

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cssmin = require('gulp-cssnano')
const rename = require('gulp-rename')

module.exports = (gulp, path) => {

  let assetsTask = ['assets:html','assets:sass'];

  gulp.task('assets:html', done => {
    return gulp.src(path.baseURL + '/src/**/*.html')
      .pipe(gulp.dest(path.dist))

    done => done()
  })

  gulp.task('assets:sass', done => {
    return gulp.src(path.sources.sass)
      .pipe(sourcemaps.init())
      .pipe(sass(path.sass).on('error', () => {
        this.emit('end')
      }))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(cssmin())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.src + '/styles/'))
  })

  gulp.task('assets', gulp.parallel(assetsTask, done => done()))

}