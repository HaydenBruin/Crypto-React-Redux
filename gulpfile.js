'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./src/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css/'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css/min/'))
    ;
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});