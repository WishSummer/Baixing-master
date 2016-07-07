var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber');

gulp.task('develop', function () {
  nodemon({
    script: './frontServer.js',
    watch: ['.'],
    ext: 'js',
    ignore: ['node_modules/', 'ui/', '.uibuild/'],
  });
});

gulp.task('default', ['develop']);
