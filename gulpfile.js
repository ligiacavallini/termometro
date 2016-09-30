/**
 * Created by ligiacavalliniribeiro on 9/28/16.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
    gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('library-styles', function() {
    gulp.src('library/*/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('library/'));
});
