/*! transfrom markdown to html file */

// @flow

module.paths.push('C:/Users/mrwang/AppData/Roaming/npm/node_modules');

// get start time
const __START_TIME = Date.now();

/**
 * Config tools
 */
const marked = require('marked');

marked.setOptions({
	renderer : new marked.Renderer(),
	highlight: function (code) {
		return require('highlight.js').highlightAuto(code).value;
	},
	pedantic   : false,
	gfm        : true,
	tables     : true,
	breaks     : false,
	sanitize   : false,
	smartLists : true,
	smartypants: false,
	xhtml      : false
});

/**
 * Markdown to HTML
 */
const fs = require('fs'),
	path = require('path');

const SOURCE_DIR = 'notes-md/',
	TARGET_DIR = 'notes-html/';

/* init */
let category = {
	data: [],
	dirs: {},
	tags: {}
};

let _temp_prev_dir = [];

/**
 * Dispaly directory
 *
 * @param {any} dir_path
 */
function dir_display (dir_path) {

	fs.readdirSync(dir_path).forEach(fileName => {
		const _file_path = path.join(dir_path, fileName),
			_target_path = path.join(TARGET_DIR, fileName);

		/* Type of judgment */
		const _stats = fs.statSync(_file_path);

		if (_stats.isFile() && path.extname(fileName) === '.md') {

			let _content = fs.readFileSync(_file_path, 'utf-8');

			/* Get document basic information */
			let _doc_info = {};

			try {
				_doc_info = _content.match(/---[\s\S]*?(\{[\s\S]*?\})[\s\S]*?---/);
				_doc_info && (_content = _content.replace(/---[\s\S]*?---/, '')) && (_doc_info = JSON.parse(_doc_info[1])) || (_doc_info = {});
			} catch(err) {
				console.log(err.message);
				console.log(_file_path + ': no document info !');
				_doc_info = {};
			}

			/* Markdown to HTML */
			_content = marked(_content);

			const new_filepath_name = path.join(path.dirname(_target_path), path.basename(_target_path, '.md') + '.html');

			/* Create new file */
			fs.writeFile(new_filepath_name, _content, err => err && console.log(err.message));

			/* File Data */
			let _ctime = (_doc_info.ctime || _stats.ctime.toLocaleString()).match(/\d+/g),
				_mtime = (_doc_info.mtime || _stats.mtime.toLocaleString()).match(/\d+/g);

			_ctime = [_ctime.slice(0, 3), _ctime.slice(3)];
			_mtime = [_mtime.slice(0, 3), _mtime.slice(3)];

			const _file_data = {
				'name': path.basename(new_filepath_name),
				'title': _doc_info.title || '无标题文档',
				'ctime': _ctime,
				'mtime': _mtime,
				'keywords': _doc_info.keywords || [],
				'summary': _doc_info.summary || ''
			};

			const _file_index = category.data.push(_file_data) - 1;

			/* tags */
			_file_data.keywords.forEach(keyword => {
				let _file_indexs = category.tags[keyword] || (category.tags[keyword] = []),
					_dir_tags = category.dirs[_temp_prev_dir[_temp_prev_dir.length - 1]];

				_file_indexs.push(_file_index);

				/* push dir */
				!_dir_tags.includes(keyword) && _dir_tags.push(keyword);
			});

		} else if (_stats.isDirectory()) {
			/* dirs */
			category.dirs[fileName] = [];

			_temp_prev_dir.push(fileName);

			/* Recursive */
			return dir_display(_file_path) || _temp_prev_dir.pop();
		}

	});
}

/**
 * Clear directory
 *
 * @param {any} dir_path
 */
function dir_clear(dir_path) {
	fs.readdirSync(dir_path).forEach(fileName => {
		const _file_path = path.join(dir_path, fileName);
		/* Type of judgment */
		const _stats = fs.statSync(_file_path);
		if (_stats.isFile()) {
			fs.unlinkSync(_file_path);
		} else if (_stats.isDirectory()) {
			/* Recursive */
			return dir_clear(_file_path) || fs.rmdirSync(_file_path);
		}
	});
}

dir_clear(TARGET_DIR);
dir_display(SOURCE_DIR);

/* Sort tags file indexs by time */
Object.keys(category.tags).forEach(tag => {
	category.tags[tag].sort((a, b) => {
		let _file_a = category.data[a],
			_file_b = category.data[b];

		return (
			new Date(_file_b.ctime[0].join('/') + ' ' + _file_b.ctime[1].join(':')).getTime()
			-
			new Date(_file_a.ctime[0].join('/') + ' ' + _file_a.ctime[1].join(':')).getTime()
		);
	});
});

// compute times
const __ALL_TIMES = (Date.now() - __START_TIME) / 1000;

/* Create category json file */
fs.writeFile('./src/utils/category.json', JSON.stringify(category), err => !err && console.log(`The category json file has been saved in ${__ALL_TIMES} s!`));