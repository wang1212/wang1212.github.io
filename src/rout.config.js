/* routs config */

// @flow

import R from './libs/Router.js';

import blog from 'utils/blog_data.json';
import category from './assets/category.json';

import Loading from 'components/loading/index.js';
import Index from 'components/index/index.js';
import Notes from 'components/notes/index.js';
import NoteContent from 'components/note-content/index.js';
import Footer from 'components/footer/index.js';

const HTML_DIRECTORY = 'notes-html/';

/**
 * register routs
 */
R.add(/\/.*/, (elem_app) => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;

  elem_app.querySelector('#Content').innerHTML = Loading();

  Array.from(elem_app.querySelectorAll('#Nav a.item')).forEach((elem) => {
    // active nav item
    if (R.get_state().startsWith(elem.getAttribute('href').slice(1))) {
      elem.classList.add('active');
    } else {
      elem.classList.remove('active');
    }
  });
});

R.add('/index', (elem_app) => {
  document.title = blog.index_name;

  elem_app.querySelector('#Content').innerHTML = Index();
});

R.add(/\/notes.*/, (elem_app) => {
  const state = R.get_state_array();

  document.title = `${blog.index_name}-笔记`;

  elem_app.querySelector('#Content').innerHTML = Notes({ state });
});

R.add(/.*(\.html)$/, (elem_app) => {
  const states = R.get_state_array();
  const file_name = states[states.length - 1];
  const file = category.data.find((file) => file.name == file_name);

  document.title = `${blog.index_name}-${file.title}`;

  // fetch(category.html_2_markdown[file_name])
  //   .then((response) => response.text())
  //   .then((markdown) => {
  //     // ! remove json head info
  //     const html = marked.parse(markdown.replace(/---[\s\S]*?---/, ''));

  //     elem_app.querySelector('#Content').innerHTML =
  //       NoteContent({ file, html }) + Footer();
  //   });

  fetch(HTML_DIRECTORY + file_name)
    .then((response) => response.text())
    .then((html) => {
      elem_app.querySelector('#Content').innerHTML =
        NoteContent({ file, html }) + Footer();
    });
});

// switch to default rout
window.onload = () => (R.have() ? R._apply() : R.switch('/index'));
