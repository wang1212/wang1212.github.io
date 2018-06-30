/* PATH Config */
const SRC_DIR = './src/',
	DIST_DIR = require('path').resolve(__dirname, '../dist/');

module.exports =  {
	dev: false,
	map: false,

	src : SRC_DIR,
	dist: DIST_DIR,

	vendors: {
		src : SRC_DIR + 'vendors/**/!(_|README)*',
		dist: DIST_DIR + '/vendors/'
	},

	view: {
		src: SRC_DIR + '**/!(_)*.html'
	},
	js: {
		src: SRC_DIR + '**/!(_)*.js'
	},
	scss: {
		src: SRC_DIR + '**/!(_)*.scss'
	},
	img: {
		src: SRC_DIR + '**/!(_)*.{png,jpg,jpeg,gif}'
	},
	json: {
		src: SRC_DIR + '**/!(_)*.json'
	}
	
};