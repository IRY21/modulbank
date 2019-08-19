var gulp                        = require('gulp');
    browserSync                 = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        // proxy: "0000gitGulpBase.my",
        // notify: false,
        server: {
            baseDir: "dist/"
        },
        files: ['dist/**/*.*']

    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});