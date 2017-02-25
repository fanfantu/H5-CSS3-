var gulp = require('gulp'),connect = require('gulp-connect');



gulp.task('watch',function(){
    gulp.watch('./index.html',['html']);
})



 gulp.task('connect',function(){
    connect.server({
        root:'./',  
        ip:'192.168.31.110',
        livereload:true
    })
}) 



gulp.task('html', function(){
  gulp.src('./index.html')
      .pipe(connect.reload());
});



gulp.task('default',['connect','watch'])