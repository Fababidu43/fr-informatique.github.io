const { src, dest, series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-html-minifier-terser');

function minifyHTML() {
  return src(['*.html', '!index_test.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(dest('dist'));
}

function minifyCSS() {
  return src('assets/css/**/*.css', { base: '.' })
    .pipe(cleanCSS())
    .pipe(dest('dist'));
}

function minifyJS() {
  return src('assets/js/**/*.js', { base: '.' })
    .pipe(uglify())
    .pipe(dest('dist'));
}

function copyImages() {
  return src('assets/img/**/*')
    .pipe(dest('dist/assets/img'));
}

function copyOtherAssets() {
  return src(['assets/vendor/**/*'], { base: 'assets' })
    .pipe(dest('dist/assets'));
}

function copyStatic() {
  return src(['robots.txt', 'sitemap.xml', 'CNAME', 'favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon-48x48.png', 'apple-touch-icon.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'site.webmanifest'], { base: './' })
    .pipe(dest('dist'));
}

exports.default = series(
  parallel(minifyHTML, minifyCSS, minifyJS, copyImages, copyOtherAssets, copyStatic)
);
