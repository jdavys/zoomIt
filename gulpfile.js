const gulp = require('gulp'),
uglify = require('gulp-uglify'),
header = require('gulp-header'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
server = require('gulp-webserver'),
mincss = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
stylus = require('gulp-stylus'),
cache = require('gulp-cached'),
remember = require('gulp-remember'),
version = '0.1.0',
paths = {
	css: {
		src: './src/css/main.styl',
		watch: './src/css/**/*.styl',
		dest: './demo/css/'
	},
	js: {
		src: './src/js/*.js',
		watch: './src/js/**/*.js',
		dest: {
			dev: './zoomIt/development',
			prod: './zoomIt/production/',
			demo: './demo/js'
		}
	}
};

gulp.task('server', function () {
	return gulp.src('./demo')
		.pipe(server({
			host: '0.0.0.0',
			port: '80',
			livereload: true,
			open: false,
		}));
});

gulp.task('build:css', function () {
	return gulp.src(paths.css.src)
		.pipe(stylus({
			'include css': true
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.css.dest))
		.pipe(mincss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.css.dest));
});

gulp.task('build:js', function () {
	return gulp.src(paths.js.src)
		.pipe(cache('build:js'))
		.pipe(header('/*! */'))
		.pipe(remember('build:js'))
		.pipe(concat('zoomIt-dev-' + version + '.js'))
		.pipe(gulp.dest(paths.js.dest.dev))
		.pipe(uglify())
		.pipe(rename({
			prefix: 'zoomIt-',
			basename: 'prod-' + version,
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.js.dest.prod))
		.pipe(gulp.dest(paths.js.dest.demo));
});

gulp.task('watch', function () {
	gulp.watch(paths.css.watch, ['build:css']);

	var watcher = gulp.watch(paths.js.watch, ['build:js']); // watch the same files in our scripts task 
	watcher.on('change', function (event) {
		if (event.type === 'deleted') { // if a file is deleted, forget about it 
			delete cache.caches['build:js'][event.path];
			remember.forget('build:js', event.path);
		}
	});
});

gulp.task('build', ['build:css', 'build:js']);

gulp.task('default', ['server', 'build', 'watch']);