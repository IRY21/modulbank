var gulp                        = require('gulp');
    cnf                         = require('../package.json').config;

gulp.task('template', function () {
    return gulp.src(cnf.src.template)
        .pipe(gulp.dest(cnf.dist.template));
});

gulp.task('template:watch', function () {
    gulp.watch(cnf.src.template, ['template', 'bs-reload']);
});