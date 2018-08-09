const gulp = require('gulp')
const removehtml = require('gulp-remove-html')
const inject = require('gulp-inject')

const path = {
  baseUrl: process.env.PWD,
  src: process.env.PWD + '/src/',
  dist: process.env.PWD + '/dist/'
}

const parallelTask = ['build:html', 'build:css', 'build:fonts']

gulp.task('build:html', done => {
  return gulp.src(`${path.src}**/*.html`)
    .pipe(removehtml())
    .pipe(inject(gulp.src(`${path.dist}scripts/bundle.min.js`, 
      {
        read: false,
        addRootSlash: false,
        // ignorePath: '../dist/'
        'cwd': path.dist
      })))
    .pipe(gulp.dest(path.dist))

  done()
})

gulp.task('build:css', done => {
  return gulp.src(`${path.src}styles/main.min.css`)
  .pipe(gulp.dest(`${path.dist}styles/`))

  done()
})

gulp.task('build:fonts', done => {
  return gulp.src(`${path.src}assets/fonts/**/*`)
    .pipe(gulp.dest(`${path.dist}assets/fonts/`))

  done()
})

require('./compress')(gulp, path)

gulp.task('default', gulp.series(
  'build:compress',

  gulp.parallel(
    parallelTask
  ),
  
  done => done()
))