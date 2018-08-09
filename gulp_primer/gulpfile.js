var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('default', ['sass_min_css', 'js_min_ugly']);

gulp.task('sass_min_css',function () {
    gulp.src('css/*/*.scss')            // 读取css目录下的以 scss 结尾的文件
        .pipe(sass())                   // sass 转换为 css
        .pipe(concat('dist/css.css'))   // 合并文件 目录名称
        .pipe(minifyCss())              // 压缩css
        .pipe(rename({suffix: '.min'})) // 修改压缩文件名称
        .pipe(gulp.dest(''))            // 输出文件

})

gulp.task('js_min_ugly',function () {
    gulp.src('js/*/*.js')                   // 读取文件
        .pipe(concat('dist/js.js'))         // 合并
        .pipe(babel({presets: ['es2015']})) // 编译
        .pipe(uglify())                     // 压缩 压缩不支持 es6 语法,需要使用 babel 编译
        .pipe(rename({suffix: '.min'}))     // 重命名
        .pipe(gulp.dest(''))                // 输出
})

gulp.watch('css/*/*.scss', ['sass_min_css']);   // 实时更新 监测文件变化, 发生变化之后执行 sass_min_css 
gulp.watch('js/*/*.js',['js_min_ugly']);