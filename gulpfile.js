'use strict';

var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync');
// var reload 		= browserSync.reload;


// Compile Style.less in css/style.css
gulp.task('less', function () {
	return gulp.src('./style/style.less')
    	.pipe(less())
    	.pipe(gulp.dest('./style/css'))
    	.pipe( browserSync.reload({stream:true}) );
});


gulp.task('browser-sync', function(){
	var config = {
		files : [
			'*.html',
			'style/css/style.css',
			'styles/**/*.less'
		],
	    server : {
	    	baseDir : "./"
	    },
	    logLevel 		: "debug",
	    logFileChanges  : true,
	    online 			: true,
	    logPrefix		: 'CSS-Shape',
	    port 			: 3000,
	    // browser: ["google chrome", "firefox"],
	    injectChanges 	: true,
	    codeSync 		: true 
	};

    browserSync(config);
});


// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Watch scss AND html files, doing different things with each.
gulp.task('serve', ['browser-sync'], function () {

	gulp.watch('./style/**/*.less', ['less']);
	// gulp.watch('./style/css/style.css', );
	gulp.watch( './*.html', ['bs-reload'] );
});
