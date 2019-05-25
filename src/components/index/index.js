/*! page index */

// @flow

import './style.scss';
import blog from 'utils/blog_data.json';


const Index = () => (`
	<main class="page-index">
		<div class="index-name display-4">${blog.index_name}</div>
		<p class="index-title h4">${blog.index_title[Math.floor(Math.random() * blog.index_title.length)]}</p>
	</main>
`);


export default Index;