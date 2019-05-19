/*! page index */

// @flow

import './style.scss';
import blog from 'utils/blog_data.json';


const Index = () => (`
	<main class="page-index">
		<div class="index-name display-4">${blog.index_name}</div>
		<p class="index-title h4">${blog.index_title[0]}</p>
	</main>
`);

/* only call one */
let scrolled = false;

window.addEventListener('scroll', () => {

	if (!scrolled) {
		const scroll_top = document.documentElement.scrollTop || document.body.scrollTop;

		if (scroll_top > 0) {
			scrolled = true;
			//document.getElementsByClassName('page-index')[0].classList.add('scroll');
		}
	}

});

export default Index;