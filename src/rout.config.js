/* routs config */

// @flow

import R from 'utils/Router.js';

import blog from 'utils/blog_data.json';
import category from 'utils/category.json';

import Index from 'components/index/index.js';
import Notes from 'components/notes/index.js';
import NoteContent from 'components/note-content/index.js';
import Footer from 'components/footer/index.js';


const HTML_DIR = 'notes-html/';

/**
 * register routs
 */
R.add(/\/.*/, elem_app => {

	document.documentElement.scrollTop = document.body.scrollTop = 0;

	Array.from(elem_app.querySelectorAll('#Nav a.item')).forEach(elem => {
		// active nav item
		if (R.get_state().startsWith(elem.getAttribute('href').slice(1))) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
});


R.add('/index', elem_app => {
	document.title = blog.index_name;

	elem_app.querySelector('#Content').innerHTML = Index();
});


R.add(/\/notes.*/, elem_app => {
	const state = R.get_state_url();

	document.title = `${blog.index_name}-笔记`;

	elem_app.querySelector('#Content').innerHTML = Notes({ state });
});


R.add(/.*(\.html)$/, elem_app => {
	const states = R.get_state_url(),
		file_name = states[states.length - 1],
		file = category.data.filter(file => file.name == file_name)[0];

	document.title = `${blog.index_name}-${file.title}`;

	fetch(HTML_DIR + file_name).then(response => response.text()).then(html => {
		elem_app.querySelector('#Content').innerHTML = NoteContent({ file, html }) + Footer();
	});
});


// switch to default rout
window.onload = () => R.have() ? R._apply() : R.switch('/index');