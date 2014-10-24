'use strict';

var gulp        = require('gulp');
var less        = require('gulp-less');
var clean 		= require('gulp-clean');
var browserSync = require('browser-sync');


// Compile Style.less to css/style.css
gulp.task('less', function () {
	return gulp.src('./style/style.less')
    	.pipe(less())
    	.pipe(gulp.dest('./style/css'))
    	.pipe( browserSync.reload({stream:true}) );
});


// Clean CSS file
gulp.task('clean', function(){
	return gulp.src('style/css', {read: false})
        .pipe(clean());
});

// Browser Sync server
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


// Browsers Sync Reload
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Watch Less and HTML files
gulp.task('serve', ['browser-sync'], function () {

	gulp.watch('./style/**/*.less', ['less']);
	// gulp.watch('./style/css/style.css', );
	gulp.watch( './*.html', ['bs-reload'] );
});
