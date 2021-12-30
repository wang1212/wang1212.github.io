/*! page index */

// @flow

import './style.scss';
import blog from 'utils/blog_data.json';
import category from 'utils/category.json';
import WordCloud from 'wordcloud';

const TAGS_WITH_NUM = Object.entries(category.tags).map(([tag, file_indexs]) => [tag, file_indexs.length]);

const Index = () => {
	const view = `
		<main class="page-index">
			<div id="index-word-cloud" class="word-cloud"></div>
			<div class="index-name display-4">${blog.index_name}</div>
			<p class="index-title h4">${blog.index_title[Math.floor(Math.random() * blog.index_title.length)]}</p>
			<div class="go-down">
				<a class="btn btn-outline-dark btn-sm font-weight-bolder" href="mailto:${blog.email}" target="_blank" title="${blog.email}">
					Email
				</a>
				<a class="btn btn-outline-dark btn-sm font-weight-bolder" href="${blog.github}" target="_blank" title="wang1212-${blog.index_name}">
					GitHub
				</a>
				<a class="btn btn-outline-dark btn-sm font-weight-bolder" href="${blog.gitee}" target="_blank" title="wang1212-${blog.index_name}">
					Gitee
				</a>
			</div>
		</main>
	`;

	setTimeout(() => {
		//
		WordCloud(document.getElementById('index-word-cloud'), {
			list: TAGS_WITH_NUM.slice(1),
			classes: 'word',
			gridSize: 100,
			weightFactor: 3,
			shape: 'circle',
			rotateRatio: 0,
			fontFamily: 'Impact',
			// color: 'random-light',
			color: '#eee',
			click: function(item) {
				location.hash = `#/notes/${item[0]}`;
			}
		});
	}, 1e3 * 4);

	return view;
};

export default Index;
