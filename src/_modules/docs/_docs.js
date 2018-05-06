/*! Document page script */

import $ from 'jquery';

/* Document data */
import Categories from 'Data/category.json';


/** 
 * Loading document list
 */
Router.add(/^\/docs((?!.html).)*$/, () => {

	document.title = '文档-不如怀念';

	let _cate = Categories[Router.get_state()] || null;

	if (!_cate) {
		return Router.switch('/docs');
	}

	if (!_cate.cate.length && !_cate.file.length) {
		return $('#content').html('<p>这是一个空文件夹！</p>');
	}

	let $dom = $('<div></div>');
	
	/* Category */
	if (_cate.cate.length) {
		$dom.append(
			'<section class="cate">' +
				'<h2>目录 <small class="text-muted float-right">' + _cate.cate.length + '个子目录</small></h2>' +
				'<div class="cate-content card-columns"></div>' +
			'</section>'
		);

		_cate.cate.forEach(path => {
			const item = Categories[path];

			let _all_keywords = [];

			item.file.length && item.file.forEach(file => {
				file.keywords.forEach(keyword => !_all_keywords.includes(keyword) && _all_keywords.push(keyword));
			});

			$dom.find('.cate-content').append($(
				'<a class="card bg-light" href="#/' + item.path + '">' +
					'<main class="card-body">' +
						'<h3 class="card-title text-center">' + item.name + '</h3>' +
						'<p class="card-text">' + _all_keywords.join(' | ') + '</p>' +
					'</main>' +
					'<footer class="card-footer text-right">' + (item.cate.length ? item.cate.length + ' 个子目录，' : '') + item.file.length + ' 篇文章</footer>' +
				'</a>'
			));
		});
	}

	/* File */
	if (_cate.file.length) {
		$dom.append(
			'<section class="file">' +
				'<h2>文章 <small class="text-muted float-right">' + _cate.file.length + '篇文章</small></h2>' +
				'<div class="file-content"></div>' +
			'</section>'
		);
		
		let _year = '';

		_cate.file.forEach(item => {
			/* Insert year */
			if (item.ctime[0][0] !== _year) {
				_year = item.ctime[0][0];
				
				$dom.find('.file-content').append($(
					'<div class="timeline-block row">' + 
						'<p class="time-yaer-break col-3 h3 text-md-right">' + _year +  '</p>' +
					'</div>'
				));
			}

			let _keywords = '';
			
			item.keywords.length && item.keywords.forEach((keyword, index) => {
				_keywords += '<span class="mr-2 badge badge-' + ['primary', 'success', 'danger', 'warning', 'info', 'dark'][index % 6] + '">' + keyword + '</span>';
			});

			$dom.find('.file-content').append($(
				'<dl class="timeline-block row">' +
					'<dt class="time col-md-3 order-last order-md-first text-right">' +
						'<span class="_ctime head d-md-block d-inline-block">' + 
							item.ctime[0].slice(1).join('/') +   
						'</span>' +
						'<span class="_mtime body d-md-block d-inline-block text-success">' + 
							item.mtime[0].join('/') + ' ' + item.mtime[1].join(':') +
						' 更新</span>' +
					'</dt>' +
					'<dd class="content col-md-9">' +
						'<a class="_title head d-block" href="#/' + _cate.path + '/' + item.name + '">' + item.title + '</a>' +
						(item.summary ? ('<p class="_summary text-muted mb-1"><b class="text-dark"><i>Summary: </i></b>' + item.summary + '</p>') : '') +
						(_keywords ? ('<p class="_keywords mb-0">' + _keywords +  '</p>') : '') +
					'</dd>' +
				'</dl>'
			).data('doc', item));
		});
	}

	$('#content').fadeOut('fast', function() {
		$(this).attr('content', 'docs').html($dom.children()).fadeIn();	
	});

});


/** 
 * Loading documents 
 */
Router.add(/\/docs.*(\.html)$/, () => {

	fetch(Router.get_state().slice(1))
		.then(response => response.text())
		.then(data => {
			$('#content').fadeOut('fast', function(){
				/* Mount document data */
				let _state = Router.get_state(),
					_filename = _state.slice(_state.lastIndexOf('/') + 1),
					_doc      = Categories[_state.slice(0, _state.lastIndexOf('/'))];

				_doc.file.some(item => {
					if (item.name === _filename) {
						return _doc = item;
					}
				});

				/* Change title */
				document.title = _doc.title + '-不如怀念';

				let _keywords = '';

				_doc.keywords.length && _doc.keywords.forEach((keyword, index) => {
					_keywords += '<span class="mr-2 badge badge-' + ['primary', 'success', 'danger', 'warning', 'info', 'dark'][index % 6] + '">' + keyword + '</span>';
				});

				/* Add header */
				const _header = 
					'<header class="jumbotron">' +
						'<h1 class="display-4">' + _doc.title + '</h1>' +
						'<p class="lead">' + _doc.summary + '</p>' +
						'<hr class="my-4">' +
						'<p>' + _keywords + '</p>' +
						'<p>' +
							'<span class="mr-2 badge badge-pill badge-light">' + _doc.ctime[0].join('-') + ' ' + _doc.ctime[1].join(':') + ' 添加</span>' +
							'<span class="mr-2 badge badge-pill badge-light">' + _doc.mtime[0].join('-') + ' ' + _doc.mtime[1].join(':') + ' 更新</span>' +
						'</p>' +
					'</header>';

				$(this).attr('content', 'docs-doc').html(_header + data).fadeIn('fast', function(){
					/* Insert line number */
					$(this).find('pre > code').each((index, item) => {
						const _height = $(item).outerHeight(),
							_lh = +$(item).css('line-height').match(/[\d.]+/);

						let _num = Math.ceil(_height / _lh);

						let _line_number = [];

						while(_num--) {
							_line_number.push(_num + 1 + '\n');
						}

						$(item).attr('line-number', _line_number.reverse().join(' '));
					});

				});
			});
		})
		.catch(err => alert(err.message));

});