/*! page nav */

// @flow

import './style.scss';

import _ from 'lodash';


/* views */
const Nav = () => (`
	<nav id="Nav" class="page-nav">
		<div class="menu">
			<div class="item-list">
				<a class="item btn btn-outline-dark material-icons" href="#/index" title="主页">favorite</a>
				<a class="item btn btn-outline-dark material-icons" href="#/notes" title="笔记">reorder</a>
				<a class="item btn btn-outline-dark material-icons" href="https://github.com/wang1212/awesome-favorites-list" title="收藏链接">link</a>
			</div>
			<i class="main-btn btn btn-dark material-icons" title="导航菜单">dashboard</i>
		</div>
		<i id="nav-go-top" class="go-top main-btn btn btn-dark material-icons mt-3 _hide" title="返回页面顶部">arrow_upward</i>
	</nav>
`);


let elem_go_top = null;

/* go top */
window.addEventListener('scroll', _.debounce(
	() => {

		const scroll_top = document.documentElement.scrollTop || document.body.scrollTop;

		if (!elem_go_top) {
			elem_go_top = document.getElementById('nav-go-top');

			// event: go top
			elem_go_top.onclick = () => (document.documentElement.scrollTop = 0) || (document.body.scrollTop = 0);
		}

		if (scroll_top > 0) {
			elem_go_top.classList.remove('_hide');
		} else {
			elem_go_top.classList.add('_hide');
		}

	},
	300
));


export default Nav;