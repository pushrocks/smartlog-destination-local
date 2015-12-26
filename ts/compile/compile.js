// import gulp
var gulp = require("gulp")
var gulpTypescript = require("gulp-typescript");

gulp.task('compileTS', function() {
	var stream = gulp.src('../index.ts')
	  .pipe(gulpTypescript({
	  	out: "index.js"
	  }))
	  .pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('compileTestTS', function() {
	var stream = gulp.src('../test.ts')
	  .pipe(gulpTypescript({
	  	out: "test.js"
	  }))
	  .pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('compileTestBrowserTS', function() {
	var stream = gulp.src('../testbrowser.ts')
			.pipe(gulpTypescript({
				out: "testbrowser.js"
			}))
			.pipe(gulp.dest("../../"));
	return stream;
});

gulp.task('default',['compileTS','compileTestTS','compileTestBrowserTS'], function() {
	console.log('Typescript compiled');
});

//lets tell gulp to start with the default task.
console.log('Starting Gulp to compile TypeScript');
gulp.start.apply(gulp, ['default']);