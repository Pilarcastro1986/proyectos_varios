const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const concatCss = require('gulp-concat-css');
const  serve = require('gulp-serve');

// gulp.task('default', ['css', 'js']);


// gulp.task('js', function () {
//   gulp.src('app/**/*.js')
//     .pipe(concat("js/minifyJS.js"))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/'))
// });

// gulp.task('default', ['imagenes', 'css', 'js']){
//     gulp.src('js/source/*.js')
//     //El método gulp.src() toma como parámetro un valor glob es decir, una cadena que coincida con uno o más archivos usando 
//     // y retorna un stream que puede ser “pipeado” a un plugin adicional ó hacia el método gulp.dest().
//     .pipe(concat('todo.js')) // nombre del archivo en el que se va a juntar todo y lo concatena
//     .pipe(uglify()) // uglify lo minificado
//     .pipe(gulp.dest('js/build/')) // el resultado estara en una carpeta build
//   });



