import gulp from 'gulp'
import zip from 'gulp-zip'

export default () => (
    gulp.src(['manifest.json', 'dist/**', 'images/**'], { "base": "." })
        .pipe(zip('extension.zip'))
        .pipe(gulp.dest('production'))
);


gulp.task('moveHtml', () => {
    return gulp.src('html/settings.html')
        .pipe(gulp.dest('dist'));
});