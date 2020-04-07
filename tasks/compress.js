'use strict';

// const rename = require('gulp-rename')
// const concat =  require('gulp-concat')
// const jsmin = require('gulp-jsmin')
// const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg')
// const imageminPngquant = require('imagemin-pngquant')
// const imageminGiflossy = require('imagemin-giflossy')
const useref = require('gulp-useref');
// const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const gulpIf = require('gulp-if');

module.exports = (gulp, path) => {
  const parallelTasks = ['build:image'];
  const seriesTasks = ['build:useref'];

  gulp.task('build:image', (done) => {
    return gulp
      .src(`${path.src}assets/images/**/*`)
      .pipe(
        imagemin([
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
            plugins: [{removeViewBox: false}],
          }),
        ])
      )
      .pipe(gulp.dest(`${path.dist}assets/images/`));

    done();
  });

  // gulp.task('build:vendorsJS', done => {
  //   return gulp.src(vendorsJS)
  //     .pipe(concat('bundle.js'))
  //     // .pipe(jsmin())
  //     .pipe(rename({suffix: '.min'}))
  //     .pipe(gulp.dest(`${path.dist}scripts/`))

  //   done()
  // })

  // gulp.task('build:concatjs', done => {
  //   return gulp.src(forBundleJS)
  //     .pipe(babel())
  //     .pipe(concat('bundle.js'))
  //     // .pipe(jsmin())
  //     .pipe(rename({suffix: '.min'}))
  //     .pipe(gulp.dest(`${path.dist}scripts/`))

  //   done()
  // })

  gulp.task('build:useref', function () {
    return (
      gulp
        .src(`${path.src}*.html`)
        .pipe(useref())
        // .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.js', terser()))
        .pipe(gulp.dest(`${path.dist}`))
    );
  });

  gulp.task(
    'build:compress',
    gulp.series(
      gulp.parallel(parallelTasks),
      seriesTasks,

      (done) => done()
    )
  );
};
