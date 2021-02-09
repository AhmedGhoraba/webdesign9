var gulp = require("gulp")
var clean = require("gulp-clean-css")
var sass = require("gulp-sass")

gulp.task("clean",function(){
    return gulp.src('dist/css/main.css')
    .pipe(clean())
    .pipe(gulp.dest('dist/css'))
})

gulp.task("mysass",function(){
    return gulp.src("src/sass/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
})

gulp.task("default",function(){
    gulp.watch('src/sass/*.scss',gulp.series("mysass","clean"))
})