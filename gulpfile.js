const { src, dest, series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

function minifyHTML() {
  return src(['*.html', '!index_test.html'])
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
  return src(['robots.txt', 'sitemap.xml', 'CNAME', 'assets/img/favicon.png', 'assets/img/apple-touch-icon.png'], { base: './' })
    .pipe(dest('dist'));
}

exports.default = series(
  parallel(minifyHTML, minifyCSS, minifyJS, copyImages, copyOtherAssets, copyStatic)
);
