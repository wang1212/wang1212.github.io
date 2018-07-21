/*! transfrom markdown to html file */

module.paths.push('C:/Users/mrwang/AppData/Roaming/npm/node_modules');

/**
 * Config tools
 */
const Marked = require('marked');

Marked.setOptions({
	renderer : new Marked.Renderer(),
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
const FS = require('fs'),
	PATH = require('path');

const Source_Dir = 'docs-source/',
	Target_Dir = 'docs/';

let _category = {
	'/docs': {
		'name': 'docs',
		'path': 'docs',
		'file': [],
		'cate': []
	}
};
let _pre_cates = [_category['/docs']];

/**
 * Dispaly directory
 * 
 * @param {any} dir_path 
 */
function dir_display(dir_path) {    
	FS.readdirSync(dir_path).forEach(fileName => {
		const _file_path = PATH.join(dir_path, fileName),
			_target_path = PATH.join(Target_Dir, PATH.relative(Source_Dir, _file_path));
		
		/* Type of judgment */
		const _stats = FS.statSync(_file_path);
		if (_stats.isFile() && PATH.extname(fileName) === '.md') {
			let _content = FS.readFileSync(_file_path, 'utf-8');

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
			_content = Marked(_content);

			const new_filepath_name = PATH.join(PATH.dirname(_target_path), PATH.basename(_target_path, '.md') + '.html');

			/* Create new file */
			FS.writeFile(new_filepath_name, _content, err => err && console.log(err.message));

			/* File */
			let _ctime = (_doc_info.ctime || _stats.ctime.toLocaleString()).match(/\d+/g),
				_mtime = (_doc_info.mtime || _stats.mtime.toLocaleString()).match(/\d+/g);

			_ctime = [_ctime.slice(0, 3), _ctime.slice(3)];
			_mtime = [_mtime.slice(0, 3), _mtime.slice(3)];

			_pre_cates[_pre_cates.length - 1].file.push({
				'name'    : PATH.basename(new_filepath_name),
				'title'   : _doc_info.title || '无标题文档',
				'ctime'   : _ctime,
				'mtime'   : _mtime,
				'keywords': _doc_info.keywords || [],
				'summary' : _doc_info.summary || ''
			});
		} else if (_stats.isDirectory()) {
			/* Create new dir */
			!FS.existsSync(_target_path) && FS.mkdirSync(_target_path);
            
			/* Directory */
			const _dir_path = _target_path.replace(/\\+/g, '/');

			const _new_cate = {
				'name': fileName,
				'path': _dir_path,
				'file': [],
				'cate': []
			};
			_category['/' + _dir_path] = _new_cate;

			_pre_cates[_pre_cates.length - 1].cate.push('/' +_dir_path) && _pre_cates.push(_new_cate);

			/* Recursive */
			return dir_display(_file_path) || _pre_cates.pop();
		}
	});
}

/**
 * Clear directory
 * 
 * @param {any} dir_path 
 */
function dir_clear(dir_path) {
	FS.readdirSync(dir_path).forEach(fileName => {
		const _file_path = PATH.join(dir_path, fileName);
		/* Type of judgment */
		const _stats = FS.statSync(_file_path);
		if (_stats.isFile()) {
			FS.unlinkSync(_file_path);
		} else if (_stats.isDirectory()) {
			/* Recursive */
			return dir_clear(_file_path) || FS.rmdirSync(_file_path);
		}
	});
}

dir_clear(Target_Dir);
dir_display(Source_Dir);

/* Sort by time */
Object.keys(_category).forEach(key => {
	_category[key].file.sort((a, b) => new Date(a.ctime[0].join('/') + ' ' + a.ctime[1].join(':')) < new Date(b.ctime[0].join('/') + ' ' + b.ctime[1].join(':')) );
});

/* Create category json file */
FS.writeFile('./data/category.json', JSON.stringify(_category), err => !err && console.log('The category json file has been saved!'));