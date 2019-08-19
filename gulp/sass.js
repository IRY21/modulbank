var gulp                        = require('gulp'),
    cnf                         = require('../package.json').config,
    plumber                     = require('gulp-plumber'),
    notify                      = require("gulp-notify"),
    sourcemaps                  = require('gulp-sourcemaps'),
    sass                        = require('gulp-sass'),
    autoprefixer                = require('gulp-autoprefixer'),
    cssnano                     = require('gulp-cssnano'),
    rename                      = require("gulp-rename"),
    bourbon                     = require('node-bourbon');

gulp.task('sass', function () {
    return gulp.src(cnf.src.sass)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: bourbon.includePaths
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(cssnano())
        .pipe(rename({
            dirname: "",
            basename: "main",
            prefix: "",
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cnf.dist.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(['src/sass/**/*.*', 'src/common.blocks/**/*.*', 'src/project.blocks/**/*.*'], ['sass', 'bs-reload']);
});