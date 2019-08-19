//https://toster.ru/q/513227
var gulp      = require('gulp');
    svgSprite = require("gulp-svg-sprite");
    replace = require("gulp-replace");
    cheerio = require("gulp-cheerio");
    cnf       = require('../package.json').config;

gulp.task("svg", function() {
    return gulp.src(cnf.src.img.svg)
        .pipe(cheerio({
            run: function($) {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
                $("[style]").removeAttr("style");
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace("&gt;", ">"))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: './',
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest(cnf.dist.img))
        //.pipe(debug({"title": "sprites"}))
});

gulp.task('svg:watch', function () {
    gulp.watch(cnf.src.img.svg, ['svg', 'bs-reload']);
});