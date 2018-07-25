const gulp = require('gulp')
const removehtml = require('gulp-remove-html')

const path = {
  baseUrl: process.env.PWD,
  src: process.env.PWD + '/src/',
  dist: process.env.PWD + '/dist/'
}

gulp.task('build:html', done => {
return gulp.src(`${path.src}**/*.html`)
  .pipe(removehtml())
  .pipe(gulp.dest(path.dist))

  done()
})

gulp.task('build:css', done => {
  return gulp.src(`${path.src}styles/main.min.css`)
  .pipe(gulp.dest(`${path.dist}styles/`))

  done()
})

require('./compress')(gulp, path)

gulp.task('default', gulp.series(
  'build:compress',

  gulp.parallel(
    'build:html',
    'build:css'
  ),
  
  done => done()
))