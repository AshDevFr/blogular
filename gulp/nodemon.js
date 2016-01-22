'use strict';
var gulp    = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(callback) {
  var started = false;
  return nodemon({
    script : 'server/server.js',
    ext    : 'html js',
    env    : {
      NODE_ENV    : 'development',
      SERVER_PORT : 3010
    },
    watch  : 'server/**/*'
  })
    .on('start', function() {
      if (!started) {
        callback();
        started = true;
        console.log('Server started!');
      }
    })
    .on('restart', function() {
      console.log('Server restarted!');
    });
});