/*
 *  /gulpfile.js
 *  © 2016 Jonathan Ballands
 */

'use strict';

//
//  Node
//
var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');

//
//  Gulp
//
var gulp = require('gulp');

//
//  Build Tools
//
var browserify = require('browserify');
var babelify = require('babelify');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var babel = require('gulp-babel');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

//
//  Utils
//
var sequence = require('run-sequence');
var yargs = require('yargs');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var file = require('gulp-file');
var rimraf = require('gulp-rimraf');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var merge = require('merge-stream');
var series = require('stream-series');
var concat = require('gulp-concat');
var print = require('gulp-print');

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

gulp.task('prepare', function(done) {
  var mode = CMD_LINE_OPTIONS.param;
  var configurationMode = configurations[mode];
  if (!configurationMode) {
    console.error(gutil.colors.yellow(mode + ' is not a valid configuration. Check configurations.json for valid configurations.'));
    process.exit(1);
  }

  // Options sanitized; save and execute tasks
  BUILD_OPTIONS = configurationMode.build;
  EXECUTION_OPTIONS = configurationMode.execution;
  sequence('build', done);
});

// -----------------------------------------------------------------------------

//
//  Build
//
gulp.task('build', function(done) {
  sequence(['kill-server', 'clean', 'transpile-server', 'make-config-file',
  'bundle', 'sass', 'move-dependencies', 'hbs-injection'], done);
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
//  Bundle
//
gulp.task('bundle', ['clean', 'transpile-server', 'make-config-file'], function(cb) {
  // Fetch all the directories in the app directory
  var folders = fs.readdirSync('./js')
    .filter(function(folder) {
      return fs.statSync(path.join('./js', folder)).isDirectory() && folder.lastIndexOf('_', 0);
    });

  // Execute the bundler on every index.js in the app directory
  var tasks = folders.map(function(folder) {
    var route = path.join(path.join('./js', folder), 'index.js');

    // Set up the bundler
    var appBundler = browserify({
      entries: route,
      debug: BUILD_OPTIONS.useSourcemaps,
      transform: ['babelify']
    });

    // Begin bundling client-code together
    return appBundler
      .bundle()
      .on('error', function (error) {
        gutil.log('BUNDLE ERROR -> ', error.message);
        this.emit('end');
      })
      .pipe(source(BUILD_OPTIONS.useMinifiedDependencies ? 'bundle.min.js' : 'bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(gulpif(BUILD_OPTIONS.useMinifiedDependencies, uglify()))
      .pipe(header('/* \n *  GENERATED FILE; DO NOT MODIFY!!! \n */\n\n'))
      .pipe(gulpif(!BUILD_OPTIONS.useSourcemaps, sourcemaps.write('./')))
      .pipe(gulp.dest(path.join('./dist/public/js/', folder)))
      .pipe(print(function(filepath) {
        return 'Bundle successfully created -> ' + filepath;
      }));
  });

  //
  // Start the tasks
  //
  // Note: Holy crap, getting this to work was horrible. You need to call this
  // poorly-named `merge-stream` module, which merges the async `task` stream
  // with... nothing. But the good news is this module forces the main stream to
  // to wait until the async stream finishes before continuing.
  //
  //  Just think before you use gulp.js
  //
  return merge(tasks);
});

//
//  Sass
//
gulp.task('sass', ['clean', 'transpile-server', 'make-config-file', 'bundle'], function() {
  return gulp.src('scss/main.scss')
    .pipe(sass({
      outputStyle: (BUILD_OPTIONS.useCompressedCss ? 'compressed' : 'nested')
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/public'));
});

//
//  Concat Bundles
//
gulp.task('concat-bundles', [], function() {
  // TODO: Concatenate all the bundles and, if necessary, uglify them
});

//
//  Concat Vendors
//
gulp.task('concat-bundles', [], function() {
  // TODO: Concatenate all the vendors and, if necessary, uglify them
});

//
//  Move Dependencies
//
gulp.task('move-dependencies', ['clean', 'transpile-server', 'make-config-file', 'bundle', 'sass'], function() {
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
gulp.task('hbs-injection', ['clean', 'transpile-server', 'make-config-file', 'bundle', 'sass', 'move-dependencies'], function() {

  //
  // Only inject things that got moved as part of the move glob in `move-assets`.
  //
  return gulp.src('./views/**/*.hbs')
    .pipe(foreach(function(stream, file) {

      var libraries = gulp.src(['**/*.js', '!**/bundle.*', '!**/angular.*', '!**/angular-route.*'],
        { read: false, cwd: __dirname + '/dist/public' });

      var css = gulp.src(['**/*.css'],
        { read: false, cwd: __dirname + '/dist/public' });

      var bundleGlob = 'js/' + path.basename(file.relative, '.hbs') + '/bundle.*';
      var bundle = gulp.src(bundleGlob, { read: false, cwd: __dirname + '/dist/public' });

      // Go ahead and inject libraries into the hbs file
      let librariesInject = stream.pipe(inject(series(libraries, css, bundle), {name: 'libraries'}));
      let bundleInject = stream.pipe(inject(bundle, {name: 'bundle'}));
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
  watch(['js/**/*', 'server/**/*', 'scss/**/*', 'views/**/*', 'assets/**/*', 'clientVendors.json', 'configurations.json'], function () {
    console.info(gutil.colors.cyan('\nChange detected. Rebuilding...\n'));
    gulp.start('default');
  });
});
