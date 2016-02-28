/*
 *  /gulpfile.js
 *  © 2016 Jonathan Ballands
 */

'use strict';

//
//  Node
//
var childProcess = require('child_process');

//
//  Gulp
//
var gulp = require('gulp');

//
//  Build Tools
//
var header = require('gulp-header');
var babel = require('gulp-babel');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

//
//  Utils
//
var yargs = require('yargs');
var file = require('gulp-file');
var rimraf = require('gulp-rimraf');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var merge = require('merge-stream');
var series = require('stream-series');

//
//  Configurations
//
var configurations = require('./configurations.json');
var clientVendors = require('./clientVendors.json');
var CMD_LINE_OPTIONS = yargs.alias('p', 'param').argv;
var BUILD_OPTIONS = null;
var EXECUTION_OPTIONS = null;

// -----------------------------------------------------------------------------

gulp.task('default', function() {
  BUILD_OPTIONS = configurations['development'].build;
  EXECUTION_OPTIONS = configurations['development'].execution;
  gulp.start(['build', 'start-server', 'watch']);
});

gulp.task('prepare', function() {

});

// -----------------------------------------------------------------------------

//
//  Build
//
gulp.task('build', ['kill-server', 'clean', 'transpile-server', 'make-config-file', 'move-dependencies', 'hbs-injection'], function() {
  // Nothing to do...
});

//
//  Clean
//
gulp.task('clean', function() {
  return gulp.src(['./public', './dist'])
    .pipe(rimraf({ force: true }));
});

//
//  Transpile Server
//
gulp.task('transpile-server', ['clean'], function() {
  return gulp.src('server/**/*.js')
    .pipe(babel({
			presets: ['es2015']
		}))
    .pipe(header('/* \n *  GENERATED FILE; DO NOT MODIFY!!! \n *  (Modify /server instead)\n */\n\n'))
    .pipe(gulp.dest('dist/server'));
});

//
//  Make Config File
//
gulp.task('make-config-file', ['clean', 'transpile-server'], function() {
  return file('config.json', JSON.stringify(EXECUTION_OPTIONS), { src: true })
    .pipe(gulp.dest('dist/server'));
});

//
//  Sass
//
gulp.task('sass', ['clean', 'transpile-server', 'make-config-file'], function() {
  return gulp.src('scss/main.scss')
    .pipe(sass({
      outputStyle: (BUILD_OPTIONS.useCompressedCss ? 'compressed' : 'nested')
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/public'));
});

//
//  Move Dependencies
//
gulp.task('move-dependencies', ['clean', 'transpile-server', 'make-config-file', 'sass'], function() {
  var assets = ['assets/**/*'];

  // Add the libraries to the move glob
  for (var i = 0 ; i < clientVendors.length ; i++) {
    var lib = clientVendors[i];
    var library = BUILD_OPTIONS.useMinifiedDependencies ? lib.prod : lib.dev;

    if (library) {
        assets.push(library);
    }
  }

  return gulp.src(assets)
    .pipe(gulp.dest('./dist/public'));
});

//
//  HBS Injection
//
gulp.task('hbs-injection', ['clean', 'transpile-server', 'make-config-file', 'sass', 'move-dependencies'], function() {

  //
  // Only inject things that got moved as part of the move glob in `move-assets`.
  //
  return gulp.src('./views/**/*.hbs')
    .pipe(foreach(function(stream, file) {

      var jquery = gulp.src('**/jquery.*',
        { read: false, cwd: __dirname + '/dist/public' });

      var libraries = gulp.src(['**/*.js', '!**/bundle.*', '!**/angular.*', '!**/angular-route.*'],
        { read: false, cwd: __dirname + '/dist/public' });

      var css = gulp.src(['**/*.css'],
        { read: false, cwd: __dirname + '/dist/public' });

      // var bundleRegex = 'app/' + path.basename(file.relative, '.hbs') + '/bundle.*';
      // var bundle = gulp.src(bundleRegex,
        // { read: false, cwd: __dirname + '/dist/public' });

      // Go ahead and inject libraries into the hbs file
      let librariesInject = stream.pipe(inject(series(jquery, libraries, css), {name: 'libraries'}));
      // let bundleInject = stream.pipe(inject(bundle, {name: 'bundle'}));
      let cssInject = stream.pipe(inject(css));

      return merge([librariesInject, cssInject]);
    }))
    .pipe(gulp.dest('./dist/views'));
});

// -----------------------------------------------------------------------------

var serverPID = null;

//
//  Kill Server
//
gulp.task('kill-server', function() {
  if (serverPID) {
    childProcess.exec('kill ' + serverPID);
  }
});

//
//  Start Server
//
gulp.task('start-server', ['build'], function() {
  var child = childProcess.spawn('node', ['./dist/server/index.js']);
  serverPID = child.pid;

  console.info(gutil.colors.green('\nStarting server in development mode...'));
  console.info(gutil.colors.cyan('When I hear a change, I will restart the server for you.'));
  console.info(gutil.colors.cyan('^C at any time to kill me.\n'));

  child.stdout.on('data', function (chunk) {
    console.info(gutil.colors.magenta('\nSERVER STDOUT -> ') + chunk.toString());
  });

  child.stderr.on('data', function (chunk) {
    console.error(gutil.colors.red('\nSERVER STRERR -> ') + chunk.toString());
  });
});

//
//  Watch
//
gulp.task('watch', ['build', 'start-server'], function() {
  watch(['app/**/*', 'server/**/*', 'scss/**/*', 'views/**/*', 'clientVendors.json', 'configurations.json'], function () {
    console.info(gutil.colors.cyan('\nChange detected. Rebuilding...\n'));
    gulp.start('default');
  });
});
