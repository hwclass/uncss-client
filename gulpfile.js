var gulp = require('gulp');
var uncss = require('gulp-uncss');

var config = {
	files : {
		html : ['src/site.html', 'src/page.html'],
		css : 'src/site.css'
	}
}

gulp.task('default', function () {
    return gulp.src(config.files.css)
        .pipe(uncss({
            html: config.files.html
        }))
        .pipe(gulp.dest('./out'));
});