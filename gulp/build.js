var gulp                        = require('gulp');
    runSequence                 = require('run-sequence');
    del                         = require('del');

gulp.task('build', function() {
    runSequence(
        'sass',
        'html',
        'js',
        'img',
        'fonts',
        'libs',
        'svg',
        //'template'
    );
});