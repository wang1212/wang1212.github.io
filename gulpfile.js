/* Base */
const gulp         = require('gulp');
const webpack      = require('webpack');
const browser_sync = require('browser-sync').create();

browser_sync.init({
	open  : false,
	server: {
		baseDir: './'
	}
});

/* path config */
const CONFIG = require('./config/gulpfile.config');

/* Dev */
const DEV = require('./config/gulpfile.dev');

/** 
 * Task
 */
gulp.task('default', ['clean', 'copy', 'minify', 'webpack']);

/* Clean */
gulp.task('clean', function() {
	return DEV.clean(CONFIG.dist);
});

/* Copy */
gulp.task('copy', ['copy:json']);

gulp.task('copy:json', ['clean'], function () {

	DEV.mapping({
		'src' : CONFIG.modules.json.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.modules.json.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.mapping,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.mapping_unlink
		}
	});
});

/* Minify */
gulp.task('minify', ['minify:sass2css', 'minify:img']);

gulp.task('minify:sass2css', ['clean'], function() {

	DEV.scss_2_css({
		'src' : CONFIG.modules.scss.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.modules.scss.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.scss_2_css,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.sass_unlink
		}
	});
});

gulp.task('minify:img', ['clean'], function() {

	DEV.img_min({
		'src' : CONFIG.modules.img.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.modules.img.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.img_min,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.mapping_unlink
		}
	});

});

/* Webpack */
gulp.task('webpack', ['clean'], function () {

	new Promise((resolve, reject) => {
		/* External dependence */
		webpack(require('./config/webpack.dll.config'), (err, stats) => {
			err && reject(err);

			console.log(stats.toString({
				colors      : true,
				modules     : false,
				children    : false,
				chunks      : false,
				chunkModules: false
			}));

			resolve(200);
		});
	})
		.then(data => {
			if (data === 200) {
				/* Business code */
				webpack(require('./config/webpack.config'), (err, stats) => {
					if (err) {
						return err;
					}

					console.log(stats.toString({
						colors      : true,
						modules     : false,
						children    : false,
						chunks      : false,
						chunkModules: false
					}));

					browser_sync.reload();
				});
			}
		})
		.catch(err => {
			console.log(err.message);
		});

});