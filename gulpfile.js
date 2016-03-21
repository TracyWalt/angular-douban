// 引入 gulp
var gulp = require('gulp');

// 引入组件
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./app/scss/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(rename('index.css'))
        .pipe(gulp.dest('./app/css/'));
});


// 默认任务
gulp.task('default', function(){
    // 监听任务 运行语句 gulp watch
    gulp.watch('./app/css/scss/*.scss', ['sass']);
});
