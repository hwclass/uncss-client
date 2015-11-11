var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('src/site.css')
        .pipe(uncss({
            html: ['src/site.html', 'src/page.html']
        }))
        .pipe(gulp.dest('./out'));
});