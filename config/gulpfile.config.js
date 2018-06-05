/* PATH Config */
const SRC_DIR = './src/',
	DIST_DIR = require('path').resolve(__dirname, '../dist/');

module.exports =  {
	'dev': false,
	'map': false,

	'src' : SRC_DIR,
	'dist': DIST_DIR,

	'modules': {
		'src' : SRC_DIR + 'modules/',
		'view': {
			'src': SRC_DIR + 'modules/**/!(_)*.html'
		},
		'js': {
			'src': SRC_DIR + 'modules/**/!(_)*.js'
		},
		'scss': {
			'src': SRC_DIR + 'modules/**/!(_)*.scss'
		},
		'img': {
			'src': SRC_DIR + 'modules/**/!(_)*.{png,jpg,jpeg,gif}'
		},
		'json': {
			'src': SRC_DIR + 'modules/**/!(_)*.json'
		}
	}
	
};