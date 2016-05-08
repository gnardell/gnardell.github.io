/*
* Gulpfile
*/

var styleSRC            = "./_dev/src/css/main.scss"; // Path to the main .scss file.
var styleDestination    = "./assets/css"; // Path to place the compiled CSS file.

var jsCustomSRC         = './_dev/src/js/custom/*.js'; // Path to JS custom scripts folder.
var jsCustomDestination = './assets/js/custom'; // Path to place the compiled JS custom scripts file.
var jsCustomFile        = 'scripts'; // Compiled JS custom file name.
                                    // Default set to custom i.e. custom.js.

// Watch files paths.
var styleWatchFiles     = './assets/_scss/**/*.scss'; // Path to all *.scss files inside css folder and inside them.
var vendorJSWatchFiles  = './assets/js/vendors/*.js'; // Path to all vendors JS files.
var customJSWatchFiles  = './assets/js/custom/*.js'; // Path to all custom JS files.

// Browsers you care about for autoprefixing.
// Browserlist https://github.com/ai/browserslist
const AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  '> 1%',
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4',
  'bb >= 10'
];


/**
 * Load Plugins.
 *
 * Load gulp plugins and assing them semantic names.
 */

var gulp            = require('gulp'); // Gulp of-course

// CSS related plugins.
var sass            = require('gulp-sass'); // Gulp pluign for Sass compilation.
var autoprefixer    = require('gulp-autoprefixer'); // Autoprefixing magic.

// JS relate plugins.
var uglify          = require('gulp-uglify');

// Utility plugins.
var rename          = require('gulp-rename'); // Renames files E.g. style.css -> style.min.css.
var cp              = require('child_process'); // Run Jekyll build whil Gulp process is running.
var browserSync     = require('browser-sync'); // Reloads browser and injects CSS. Time-saving synchronised browser testing.


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
* Rebuild Jekyll & do page reload
*/
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
* Wait for jekyll-build, then launch the Server
*/
const siteRoot = '_site'
gulp.task('browser-sync', ['styles', 'customJS', 'jekyll-build'], function() {
    browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

/**
 * Task: `styles`.
 *
 * Compiles Sass, Autoprefixes it and Minifies CSS.
 *
 * This task does the following:
 *     1. Gets the source scss file
 *     2. Compiles Sass to CSS
 *     3. Autoprefixes it and generates style.css
 *     4. Injects CSS or reloads the browser via browserSync
 */

gulp.task('styles', function(){
  gulp.src(styleSRC)
        .pipe(sass({
          errLogToConsole: true,
          // outputStyle: 'compact',
          // outputStyle: 'compressed',
          outputStyle: 'nested',
          // outputStyle: 'expanded',
          precision: 10
        }))
        .pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
        .pipe(browserSync.reload({stream:true}))
        .pipe( gulp.dest( styleDestination ) )
});


/**
 * Task: `customJS`.
 *
 * Concatenate and uglify custom JS scripts.
 *
 * This task does the following:
 *         1. Gets the source folder for JS custom files
 *         2. Renames the JS file with suffix .min.js
 *         4. Uglifes/Minifies the JS file and generates custom.min.js
 */

gulp.task('customJS', function(){
    gulp.src(jsCustomSRC)
        .pipe(rename({
            basename: jsCustomFile,
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(browserSync.reload({stream:true}))
        .pipe( gulp.dest( jsCustomDestination ) )
});



/**
 * Watch Tasks.
 *
 * Watches for file changes and runs specific tasks.
 */

gulp.task('watch', function () {
    gulp.watch( styleWatchFiles, [ 'styles' ] ); // Reload on SCSS file changes.
    gulp.watch( customJSWatchFiles, [ 'customJS'] ); // Reload on customJS file changes.
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*.html'], ['jekyll-rebuild']);
});



gulp.task( 'default', ['browser-sync', 'customJS', 'watch']);
