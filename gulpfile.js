const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

function compilaSass(){
  return gulp
  .src("css/scss/*.scss")
  .pipe(sass({outputStyle: "compressed"}))
  .pipe(autoprefixer({
    browsers: ["last 2 versions"],
    cascade: false
  }))
  .pipe(gulp.dest("css/"))
  .pipe(browserSync.stream())
}
exports.compilaSass = compilaSass;

function browser(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}
exports.browser = browser;

function watch(){
  gulp.watch("css/scss/*.scss", compilaSass);
  gulp.watch("*.html").on("change", browserSync.reload)
}
exports.watch = watch;

exports.default = gulp.parallel(watch, browser, compilaSass);