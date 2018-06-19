/* eslint no-console: 0 */
var path = require('path');
var gulp = require('gulp');
var bump = require('gulp-bump');
var pkg = path.join(process.cwd(), 'package.json')
var version = require(pkg).version;

require('colors');

var buildLibDir =  path.join(process.cwd(), 'build', 'red5pro-ext-stream-manager-' + version, 'lib');
var buildDir = path.join(buildLibDir, 'red5pro');
var examplesDir = path.join(process.cwd(), 'examples', 'browser');

console.log('Current version is ' + version.white + '.');

// eslint-disable-next-line no-unused-vars
gulp.task('move-build-to-examples', [], function(cb) {
  return gulp.src([path.join(buildDir, '**', '*')]).pipe(gulp.dest(path.join(examplesDir, 'lib', 'red5pro')));
});

gulp.task('bump-version', function() {
  var versionType = process.env.BUMP !== undefined ? process.env.BUMP : 'patch';
  var files = [pkg];
  if (versionType === 'none') {
    gulp.src(files).pipe(gulp.dest(__dirname));
  }
  else {
    gulp.src(files)
      .pipe(bump({
        type: versionType
      }))
      .pipe(gulp.dest(__dirname));
  }
});


