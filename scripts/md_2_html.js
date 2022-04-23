/* eslint-disable no-underscore-dangle */
/*! transfrom markdown to html file */

// @flow
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const { marked } = require('marked');
const matter = require('gray-matter');
const hljs = require('highlight.js');

// get start time
const __START_TIME = Date.now();

/**
 * Markdown to HTML
 */
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight(code, lang) {
    if (lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }

    return hljs.highlightAuto(code).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  smartLists: true,
});

const MARKDOWN_DIRECTORY = 'notes-md/';
const HTML_DIRECTORY = 'notes-html/';

/* init */
const category = {
  data: [],
  // html_2_markdown: {},
  dirs: {},
  tags: {},
};

const tempPrevDir = [];

/**
 * Dispaly directory
 *
 * @param {string} source
 */
function dir_display(source) {
  fs.readdirSync(source).forEach((path_) => {
    const source_ = path.join(source, path_);
    const stats = fs.statSync(source_);

    if (stats.isDirectory()) {
      /* dirs */
      category.dirs[path_] = [];

      tempPrevDir.push(path_);

      /* Recursive */
      dir_display(source_);

      tempPrevDir.pop();
    }

    if (stats.isFile() && path.extname(path_) === '.md') {
      const mdContent = fs.readFileSync(source_, 'utf-8');
      const fileMetadata = matter(mdContent);
      let frontMatter = {};

      if (fileMetadata.isEmpty) {
        console.log(`${source_}: Empty document front-matter!`);
      } else {
        frontMatter = fileMetadata.data;
      }

      // * Markdown to HTML
      const htmlContent = marked(fileMetadata.content);

      const htmlFileName = `${path.basename(path_, '.md')}.html`;
      const htmlFilePath = path.join(
        path.dirname(path.join(HTML_DIRECTORY, path_)),
        htmlFileName
      );

      fs.writeFile(
        htmlFilePath,
        htmlContent,
        (err) => err && console.log(err.message)
      );

      // * File Data
      const fileData = {
        name: htmlFileName,
        title: frontMatter.title || '无标题文档',
        ctime: dayjs(frontMatter.ctime || stats.ctime).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        mtime: dayjs(frontMatter.mtime || stats.mtime).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        tags: frontMatter.tags || [],
        keywords: frontMatter.keywords || [],
        summary: frontMatter.summary || '',
      };

      const fileIndex = category.data.push(fileData) - 1;

      // * tags
      fileData.tags.forEach((tag) => {
        const fileIndexes = category.tags[tag] || (category.tags[tag] = []);
        const dirTags = category.dirs[tempPrevDir[tempPrevDir.length - 1]];

        fileIndexes.push(fileIndex);

        /* push dir */
        if (!dirTags.includes(tag)) {
          dirTags.push(tag);
        }
      });
    }

    //
  });
}

/**
 * Clear directory
 *
 * @param {any} source
 */
function dir_clear(source) {
  fs.readdirSync(source).forEach((fileName) => {
    const source_ = path.join(source, fileName);
    /* Type of judgment */
    const stats = fs.statSync(source_);
    if (stats.isFile()) {
      fs.unlinkSync(source_);
    } else if (stats.isDirectory()) {
      /* Recursive */
      dir_clear(source_);

      fs.rmdirSync(source_);
    }
  });
}

dir_clear(HTML_DIRECTORY);
dir_display(MARKDOWN_DIRECTORY);

/* Sort tags file indexs by time */
Object.keys(category.tags).forEach((tag) => {
  category.tags[tag].sort((a, b) => {
    const _file_a = category.data[a];
    const _file_b = category.data[b];

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
