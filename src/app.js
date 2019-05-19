/* App entry file */

// @flow

import './app.scss';
import './rout.config.js';

import Nav from 'components/nav/index.js';


// get app root element
const _elem_root = document.getElementById('App'),
	Content = () => '<div id="Content" class="content"></div>';

/* mount app */
if (_elem_root) {
	_elem_root.innerHTML = Nav() + Content();
}