const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const concatCss = require('gulp-concat-css');
const  serve = require('gulp-serve');
const gutil = require('gulp-util');


gulp.task('build', ['css', 'js']);

gulp.task('css', function () { // en este caso no hay CSS que compilar
    gulp.src('public/app/*.css')
    .pipe(concatCss('css/minifyCSS.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'))
});

gulp.task('js', function () {
  gulp.src('public/app/*.js')
    .pipe(concat("js/minifyJS.js"))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('dist/'))
});
