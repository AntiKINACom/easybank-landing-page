const gulp = require("gulp");
const sass = require("gulp-sass");

//style paths
var sassFiles = "app/scss/*.scss",
    cssDest = "build/css/";

gulp.task("styles", async function () {
    gulp.src(sassFiles)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task("watch", async function () {
    gulp.watch(sassFiles, ["styles"]);
});
