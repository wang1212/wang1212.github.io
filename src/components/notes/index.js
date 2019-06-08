/*! page notes */

// @flow

import './style.scss';

import Chart from 'chart.js';

import category from 'utils/category.json';
import _ from 'lodash';


/* utils */
function get_color (num) {
	return num >= 10 ? 'primary' : (num >= 5 ? 'info' : 'light');
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
									file.keywords.map(keyword => (
										file.tags.includes(keyword)
										&& `<a class="btn btn-outline-dark btn-sm mr-2 mb-2" href="#/notes/${keyword}">${keyword}</a>`
										|| `<span class="btn btn-outline-dark btn-sm mr-2 mb-2">${keyword}</span>`
									)).join('')
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


const Notes = (context: any) => {

	let _tag = decodeURI(context.state[1]);

	const view = `
		<main class="page-notes container">
			<section class="mb-4">
				<canvas id="notes-chart" class="notes-chart"></canvas>
			</section>
			<section class="tags-box mb-5">
				<h2>Tags</h2>
				<hr/>
				${Tags}
			</section>
			<section class="tag-notes-list">
				${TagNotesListContent(context.state)}
			</section>
		</main>
	`;

	setTimeout(() => {
		const labels = {
			'Web 前端开发': 'Front End',
			'Web 后端开发': 'Back End',
			'GIS 开发': 'GIS',
			'阅读': 'Reading',
			'旅游': 'Tourism',
			'经济': 'Economics',
			'金融': 'Finance',
		};

		category.tags[_tag] && !_.values(labels).includes(_tag) && (labels[_tag] = _tag);

		function adjustRadiusBasedOnData (ctx) {
			var v = ctx.dataset.data[ctx.dataIndex];
			return v < 5 ? 5
				: v < 10 ? 7
					: v < 20 ? 9
						: v < 35 ? 11
							: v < 50 ? 13
								: 15;
		}

		// chart
		new Chart(document.getElementById('notes-chart'), {
			type: 'radar',
			data: {
				labels: _.keys(labels),
				datasets: [{
					label: '',
					data: _.values(labels).map(tag => _.get(category.tags, [tag, 'length'], 0)),
					backgroundColor: Chart.helpers.color('#007bff').alpha(0.2).rgbString(),
					borderColor: Chart.helpers.color('#007bff').alpha(0.5).rgbString(),
				}]
			},
			options: {
				legend: false,
				tooltips: false,
				elements: {
					point: {
						radius: adjustRadiusBasedOnData,
						pointStyle: 'circle',
						hoverRadius: 15,
					}
				},
				scale: {
					pointLabels: {
						fontColor: '#007bff',
						fontSize: 14
					}
				}
			}
		});
	}, 300);

	return view;
};


export default Notes;