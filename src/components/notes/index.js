/*! page notes */

// @flow

import './style.scss';

import category from 'utils/category.json';
import _ from 'lodash';


/* utils */
function get_color (num) {
	return num >= 10 ? 'primary' : (num >= 3 ? 'info' : 'light');
}


/* views */
const Tags = _.map(category.tags, (file_indexs, tag) => [tag, file_indexs.length]).sort((a, b) => b[1] - a[1]).map(item => (`
	<a class="btn btn-${get_color(item[1])} mr-2 mb-2" href="#/notes/${item[0]}">
		${item[0]}
		<span class="badge badge-light ml-2">${item[1]}</span>
	</a>
`)).join('');


const TagNotesListContent = state => {

	let Content = '';

	if (state.length > 1) {
		let _tag = decodeURI(state[1]),
			_files = category.tags[_tag].map(file_index => category.data[file_index]);

		/* temp */
		let _tmp_ctime_year = '';

		/* eslint-disable */
		Content = `
			<h3>${_tag}</h3>
			<hr/>
			<div class="notes-list">
				${
				_files.map(file => `
						${
					(file.ctime[0][0] !== _tmp_ctime_year) && (
						_tmp_ctime_year = file.ctime[0][0],
						`<h4 class="time-year-break">${_tmp_ctime_year}</h4>`
					) || ''
					}
						<div class="note-item">
							<a class="item-title h5 mb-2" href="#/note-content/${file.name}">${file.title}</a>
							<div>
								${
									file.keywords.map(keyword => `
										<a class="btn btn-outline-dark btn-sm mr-2 mb-2" href="#/notes/${keyword}">${keyword}</a>
									`).join('')
								}
							</div>
							<p class="text-muted mb-1">${file.summary}</p>
							<span class="badge badge-light">${file.mtime[0].join('-')}  ${file.mtime[1].slice(0, 2).join(':')} 最后更新</span>
						</div>
					`).join('')
				}
			</div>
		`;
		/* eslint-enable */
	}

	return Content;
};


const Notes = (context: any) => (`
	<main class="page-notes container">
		<section id="" class="tags-box mb-5">
			<h2>Tags</h2>
			<hr/>
			${Tags}
		</section>
		<section class="tag-notes-list">
			${TagNotesListContent(context.state)}
		</section>
	</main>
`);


export default Notes;