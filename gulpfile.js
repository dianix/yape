const gulp = require("gulp");
const sass = require("gulp-sass");

const rutasFuente = {
    html: './src/**/*.html',
    js: './src/assets/js/*.js',
    scss: './src/assets/scss/styles.scss'
}

const rutasDestino = {
    html: './public/',
    js: './public/assets/js/',
    css: './public/assets/css/'
}

gulp.task("copiarHTML", function () {
    gulp.src(rutasFuente.html)
        .pipe(gulp.dest(rutasDestino.html))
    console.log("corre html")
});

gulp.task("copiarJS", function () {
    gulp.src(rutasFuente.js)
        .pipe(gulp.dest(rutasDestino.js))
    console.log("corre js")
});

gulp.task("copiarCSS", function () {
    gulp.src(rutasFuente.scss)
        .pipe(sass({
                outputStyle: 'expanded'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest(rutasDestino.css))
    console.log(rutasFuente.scss)
});
