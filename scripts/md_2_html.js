/*! transfrom markdown to html file */

// @flow
const dayjs = require('dayjs');

// get start time
const __START_TIME = Date.now();

/**
 * Markdown to HTML
 */
const fs = require('fs');
const path = require('path');

const MARKDOWN_DIRECTORY = 'notes-md/';

/* init */
let category = {
  data: [],
  html_2_markdown: {},
  dirs: {},
  tags: {},
};

let _temp_prev_dir = [];

/**
 * Dispaly directory
 *
 * @param {string} dir_path
 */
function dir_display(dir_path) {
  fs.readdirSync(dir_path).forEach((file_name) => {
    const _file_path = path.join(dir_path, file_name);
    const _stats = fs.statSync(_file_path);

    if (_stats.isFile() && path.extname(file_name) === '.md') {
      let _content = fs.readFileSync(_file_path, 'utf-8');

      /* Get document basic information */
      let _doc_info = {};

      try {
        _doc_info = _content.match(/---[\s\S]*?(\{[\s\S]*?\})[\s\S]*?---/);

        if (_doc_info) {
          _content = _content.replace(/---[\s\S]*?---/, '');
          _doc_info = JSON.parse(_doc_info[1]);
        } else {
          _doc_info = {};
        }
      } catch (err) {
        console.log(err.message);
        console.log(_file_path + ': no document info !');
        _doc_info = {};
      }

      const html_file_name = path.basename(file_name, '.md') + '.html';

      // * File Data
      const _file_data = {
        name: html_file_name,
        title: _doc_info.title || '无标题文档',
        ctime: dayjs(_doc_info.ctime || _stats.ctime).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        mtime: dayjs(_doc_info.mtime || _stats.mtime).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        tags: _doc_info.tags || [],
        keywords: _doc_info.keywords || [],
        summary: _doc_info.summary || '',
      };

      const _file_index = category.data.push(_file_data) - 1;

      // * tags
      _file_data.tags.forEach((tag) => {
        let _file_indexs = category.tags[tag] || (category.tags[tag] = []),
          _dir_tags = category.dirs[_temp_prev_dir[_temp_prev_dir.length - 1]];

        _file_indexs.push(_file_index);

        /* push dir */
        !_dir_tags.includes(tag) && _dir_tags.push(tag);
      });

      // * html 2 markdown path
      if (category.html_2_markdown[path.basename(html_file_name)]) {
        throw new Error('"file_name" duplicate!');
      }

      category.html_2_markdown[path.basename(html_file_name)] = _file_path;
    } else if (_stats.isDirectory()) {
      /* dirs */
      category.dirs[file_name] = [];

      _temp_prev_dir.push(file_name);

      /* Recursive */
      return dir_display(_file_path) || _temp_prev_dir.pop();
    }
  });
}

dir_display(MARKDOWN_DIRECTORY);

/* Sort tags file indexs by time */
Object.keys(category.tags).forEach((tag) => {
  category.tags[tag].sort((a, b) => {
    let _file_a = category.data[a];
    let _file_b = category.data[b];

    return dayjs(_file_b.ctime).valueOf() - dayjs(_file_a.ctime).valueOf();
  });
});

// compute times
const __ALL_TIMES = (Date.now() - __START_TIME) / 1000;

/* Create category json file */
fs.writeFile(
  './src/assets/category.json',
  JSON.stringify(category),
  (err) =>
    !err &&
    console.log(`The category json file has been saved in ${__ALL_TIMES}s!`)
);
