const { src, dest, series, parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

function minifyHTML() {
  return src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest('dist'));
}

function minifyCSS() {
  return src('assets/css/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(dest('dist/assets/css'));
}

function minifyJS() {
  return src('assets/js/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/assets/js'));
}

function optimizeImages() {
  return src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/assets/img'));
}

function copyOtherAssets() {
  return src(['assets/vendor/**/*'], { base: 'assets' })
    .pipe(dest('dist/assets'));
}

function copyStatic() {
  return src(['forms/**/*', 'robots.txt', 'sitemap.xml', 'CNAME'], { base: './' })
    .pipe(dest('dist'));
}

exports.default = series(
  parallel(minifyHTML, minifyCSS, minifyJS, optimizeImages, copyOtherAssets, copyStatic)
);
