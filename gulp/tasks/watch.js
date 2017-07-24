var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// ======================================================================DEFAULT
gulp.task('default', ['watch']);
// =================================================================BROWSER-SYNC
gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: "app"
    }
  });
// ======================================================STYLES============WATCH
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });
// ======================================================SCRIPTS============WATCH
  watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });
// ======================================================INDEX.HTML========WATCH
  watch('./app/index.html', function(){
    browserSync.reload();
  });


});



gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/build/master.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});
