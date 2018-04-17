'use strict'

var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('serv', function() {
    gulp.src('./app')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            open: true
        }));
});

gulp.task('default',['serv']);