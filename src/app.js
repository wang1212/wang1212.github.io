/* App entry file */

// @flow

import './app.scss';
import './rout.config';

import Nav from 'components/nav/index.js';

// get app root element
const _elem_root = document.getElementById('App');
const Content = () => '<div id="Content" class="content"></div>';

/* mount app */
if (_elem_root) {
  _elem_root.innerHTML = Nav() + Content();
}

a;
