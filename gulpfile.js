// Подключаем Gulp
var gulp = require("gulp");
var rigger = require("gulp-rigger");
let watch = require('gulp-watch');
let prefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let cssmin = require('gulp-clean-css');
// let imagemin = require('gulp-imagemin');
// let pngquant = require('imagemin-pngquant');
let rimraf = require('rimraf');
let browserSync = require("browser-sync");
let reload = browserSync.reload;

let config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "kalinovNe"
};

gulp.task('js:build', function (cb) {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
        cb();
});

gulp.task('style:build', function (cb) {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init()) 
        .pipe(sass()) 
        .pipe(prefixer()) 
        .pipe(cssmin()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload({stream: true})); 
        cb();
});

gulp.task('image:build', function (cb) {
    gulp.src(path.src.img) 
        .pipe(gulp.dest(path.build.img)) 
        .pipe(reload({stream: true})); 
    cb();
});

// gulp.task('watch', function(){
//     watch([path.watch.html], function(event, cb) {
//         gulp.series('html:build');
//     });
//     watch([path.watch.style], function(event, cb) {
//         gulp.series('style:build');
//     });
//     watch([path.watch.js], function(event, cb) {
//         gulp.series('js:build');
//     });
// });

// gulp.task('clean', function (cb) {
//     rimraf(path.clean, cb);
//     cb();
// });

var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/'
    },
    src: { 
        html: 'src/*.html', 
        js: 'src/js/main.js',
        style: 'src/sass/main.scss',
        img: 'src/img/**/*.*' 
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*',
    },
    clean: './build'
};

gulp.task('html:build', function (cb) {
    gulp.src(path.src.html) 
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true}));
    cb();
});

gulp.task('webserver', function (cb) {
    browserSync(config);
    cb();
});

gulp.task('build', function(cb){
    gulp.series('html:build', 'js:build', 'style:build', 'image:build');
    cb();
});

gulp.task("default", gulp.series('html:build', 'js:build', 'style:build', 'image:build', 'webserver'));

gulp.watch('./src/**/*.*', gulp.series('html:build', 'js:build', 'style:build', 'image:build'));