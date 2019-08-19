var gulp                        = require('gulp');
    runSequence                 = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        'build',
        [
            'html:watch',
            'sass:watch',
            'js:watch',
            'fonts:watch',
            'img:watch',
            'libs:watch',
            'svg:watch',
            'template:watch'
        ],
        'server'
    );
});