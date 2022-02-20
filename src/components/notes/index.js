/*! page notes */

// @flow

import './style.scss';
import category from 'utils/category.json';
import WordCloud from 'wordcloud';
import * as dayjs from 'dayjs';

const TAGS_WITH_NUM = Object.entries(
  category.tags
).map(([tag, file_indexs]) => [tag, file_indexs.length]);

/* utils */
function get_color(num) {
  return num >= 10 ? 'primary' : num >= 5 ? 'info' : 'light';
}

/* views */
const Tags = TAGS_WITH_NUM.sort((a, b) => b[1] - a[1])
  .map(
    item => `
	<a class="btn btn-${get_color(item[1])} mr-2 mb-2" href="#/notes/${item[0]}">
		${item[0]}
		<span class="badge badge-light ml-2">${item[1]}</span>
	</a>
`
  )
  .join('');

const TagNotesListContent = state => {
  let _files = category.data.slice();
  let _tag = `${_files.length} 篇`;

  /* temp */
  let _tmp_by_sort = 'ctime';

  function generate_html(by_sort = 'ctime') {
    if (state.length > 1) {
      _tag = decodeURI(state[1]);
      _files = category.tags[_tag]
        .map(file_index => category.data[file_index])
        .slice();
    }

    _files.sort((a, b) => {
      return dayjs(b[by_sort]).valueOf() - dayjs(a[by_sort]).valueOf();
    });

    let _tmp_time_year = '';

    // prettier-ignore
    /* eslint-disable */
    return `
			<h3>${_tag}</h3>
			<hr/>
			<div id="_js-notes-list" class="notes-list">
				<p class="text-right mb-2">
					<button class="btn btn-sm btn-outline-secondary ${by_sort === 'ctime' && 'active'}" onclick="_onChangeBySort('ctime');">添加时间</button>
					<button class="btn btn-sm btn-outline-secondary ${by_sort === 'mtime' && 'active'}" onclick="_onChangeBySort('mtime');">更新时间</button>
				</p>
				${_files
					.map(
						file => `
							${(dayjs(file[by_sort]).year() !== _tmp_time_year &&
								((_tmp_time_year = dayjs(file[by_sort]).year()),
								`<h4 class="time-year-break">${_tmp_time_year}</h4>`)) ||
								''}
							<div class="note-item">
								<a class="item-title h5 mb-2" href="#/note-content/${file.name}">${
									file.title
								}</a>
								<div>
									${file.keywords
										.map(
											keyword =>
												(file.tags.includes(keyword) &&
													`<a class="btn btn-outline-dark btn-sm mr-2 mb-2" href="#/notes/${keyword}">${keyword}</a>`) ||
												`<span class="btn btn-outline-dark btn-sm mr-2 mb-2">${keyword}</span>`
										)
										.join('')}
								</div>
								<p class="text-muted mb-1">${file.summary}</p>
								<span class="badge badge-light">${dayjs(file.ctime).format(
									'YYYY-MM-DD HH:mm'
								)} 添加</span>
								<span class="badge badge-light">${dayjs(file.mtime).format(
									'YYYY-MM-DD HH:mm'
								)} 最后更新</span>
							</div>
						`
					)
					.join('')
				}
			</div>
		`;
    /* eslint-enable */
  }

  window._onChangeBySort = function(by_sort) {
    if (by_sort === _tmp_by_sort) return;
    _tmp_by_sort = by_sort;

    document.getElementById(
      '_js-notes-list'
    ).parentElement.innerHTML = generate_html(by_sort);
  };

  return generate_html();
};

const Notes = context => {
  //
  const view = `
		<main class="page-notes container">
			<section class="word-cloud">
				<div id="word-cloud"></div>
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
    // 标签云
    WordCloud(document.getElementById('word-cloud'), {
      list: TAGS_WITH_NUM,
      classes: 'word',
      gridSize: 50,
      weightFactor: 2,
      shape: 'circle',
      // rotateRatio: 0,
      fontFamily: 'Impact',
      color: 'random-light',
      // color: '#aaa',
      click: function(item) {
        location.hash = `#/notes/${item[0]}`;
      }
    });
  }, 300);

  return view;
};

export default Notes;
