const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

// Tâche pour combiner et minifier CSS
gulp.task('css', function() {
  return gulp.src(['assets/vendor/bootstrap/css/bootstrap.min.css', 'assets/css/main.css'])
    .pipe(concat('combined.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('assets/css'));
});

// Tâche pour combiner et minifier JS
gulp.task('js', function() {
  return gulp.src(['assets/vendor/bootstrap/js/bootstrap.bundle.min.js', 'assets/js/main.js'])
    .pipe(concat('combined.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

// Tâche pour surveiller les changements
gulp.task('watch', function() {
  gulp.watch('assets/css/*.css', gulp.series('css'));
  gulp.watch('assets/js/*.js', gulp.series('js'));
});

// Tâche par défaut
gulp.task('default', gulp.series('css', 'js'));
