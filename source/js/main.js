// Rooter
$(function() {
	var url = location.hash.match(/[^#].*/) + '',
		url_array = ['/homepage', '/categories/index', '/book_of_ruby/index'],
		$index_nav = $('#index-nav'),
		$index_content = $('#index-content'),
		$progress_bar = $('#progress-bar'),
		$to_open = $('#to-open'),
		$to_close = $('#to-close');

	// Get content and show
	function showContent(newURL, otherURL) {
		var $list = $('#list'),
			$content = $('#content'),
			url_index = url_array.indexOf(newURL);

		url = newURL;

		if (url_index > -1) {
			$to_open.css('display', 'none');
			$to_close.css('display', 'none');
			// homepage
			if (url_index === 0) {
				$index_nav.addClass('hidden-md-up');
				$progress_bar.css('display', 'none');
			} else {
				$index_nav.removeClass('hidden-md-up');
				$progress_bar.css('display', 'block');
			}
			// categories.index
			if (url_index === 1 && $content.length) {
				return $content.length && $content.fadeOut(300, function() {
					$list.length && $list.fadeIn(1000);
				});
			}
			// book_of_ruby.index
			if (url_index === 2) {

			}
			$content = $index_content;
		} else {
			$list.length && $list.css('display', 'none');

			if ($content.length === 0) {
				// 预加载
				if (url.match('/categories/')) {
					return showContent('/categories/index', newURL);
				}
				if (url.match('/book_of_ruby/')) {
					return showContent('/book_of_ruby/index', newURL);
				}
				$content = $index_content;
			}
		}

		$content.html("<h1 class='text-xs-center'>正在奋力加载哟...</h1>").fadeIn(300, function() {
			$.ajax({
					type: 'GET',
					url: url.match('.html') ? url : url + '.html',
					dataType: 'html',
				})
				.done(function(html) {
					$content.fadeOut(300, function() {
						$content.html(html);
						// 后加载
						if (otherURL) {
							$content.css('display', 'block');
							return showContent(otherURL);
						}
						// 生成侧边导航
						if (url_index != 1 && url.match('/categories/')) {
							generateCateSideBar();
							$to_open.css('display', 'block');
						}
						$content.fadeIn(1000);
						// Change page title
						document.title = $('.page-title').last().text() || '不如怀念';
					});
				})
				.fail(function() {
					$content.fadeOut(300, function() {
						$content.html("<h1 class='text-xs-center'>加载失败了，请求的页面不存在</h1>").fadeIn(500);
						// Change page title
						document.title = "错误，页面不存在";
					});
				});
		});
	}

	$(window).on('hashchange', function() {
		var newURL = location.hash.match(/[^#].*/) + '';
		newURL != url && showContent(newURL);
	});

	if (url == 'null' || url == false) {
		location.hash = '#/homepage';
	} else {
		showContent(url);
	}
});

// Event 
$(function() {
	var $win = $(window),
		$body = $('body'),
		$progress_bar = $('#progress-bar'),
		$to_top = $('#to-top'),
		$to_open = $('#to-open'),
		$to_close = $('#to-close');

	// To top
	$win.on('scroll', function() {
		var w_scrollTop = $win.scrollTop();
		// Progress
		$progress_bar.width((w_scrollTop + $win.height()) / $body.height() * $win.width());
		// Top
		w_scrollTop > $win.height() ? $to_top.show(1000) : $to_top.hide(1000);
	});

	$to_top.on('click', function() {
		$win.scrollTop(0);
	});

	$to_open.on('click', function() {
		var $cate_side_bar = $('#cate-side-bar');

		$cate_side_bar.animate({
			left: '0px'
		});
		$to_open.fadeOut(300, function() {
			$to_close.fadeIn(800);
		});
	});

	$to_close.on('click', function() {
		var $cate_side_bar = $('#cate-side-bar');

		$cate_side_bar.animate({
			left: -$cate_side_bar.outerWidth()
		});
		$to_close.fadeOut(300, function() {
			$to_open.fadeIn(800);
		});
	});
});

// Categories
$(function() {

	function generateCateSideBar() {
		var $content = $('#content'),
			title = $content.find('.page-title').last().text();

		// 自动添加分页
		$.getJSON('/source/json/categories.json', function(data) {
			var cate = $content.find('#categories').text().match(/[\w-]+/).join(),
				temp;

			if (temp = data[cate]) {
				var prev, next;

				for (var i in temp) {
					if (temp[i].title === title) {
						prev = +(i > 0 ? i - 1 : 'null');
						next = +(i < temp.length - 1 ? +i + 1 : 'null');
						break
					}
				}

				var str = '<nav aria-label="Page navigation clearfix"><ul class="pagination pagination-sm mt-3 clearfix" style="display:block">';
				if (!isNaN(prev)) {
					str += '<li class="page-item float-xs-left"><a class="page-link" href="/#' + temp[prev].path + '" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span> ' + temp[prev].title + '</a></li>';
				}
				if (!isNaN(next)) {
					str += '<li class="page-item float-xs-right"><a class="page-link" href="/#' + temp[next].path + '" aria-label="Previous">' + temp[next].title + ' <span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li > ';
				}
				str += '</ul></nav>';

				$content.children('.container').find('.col-md-9').append($(str));
			}
		});

		// 自动遍历生成目录导航
		var $cate_side_bar = $('<div id="cate-side-bar" class="col-md-3 col-sm-8 col-xs-10 text-xs-left"><p class="h3">' + title + '</p></div>');

		$content.find('section').each(function() {
			var $self = $(this),
				$parent = $self.parent('section'),
				$prev = $self.prevAll('section'),
				$target,
				id;

			if ($parent.length === 0) {
				id = 'paragraph' + $prev.length;
				$target = $cate_side_bar.children('ul');

				if ($target.length === 0) {
					$target = $cate_side_bar.append($('<ul>')).children('ul:last-of-type');
				} else {
					$target = $target.last();
				}
			} else {
				$parent = $parent.last();
				id = $parent.attr('id') + '-' + $prev.length;

				if ($prev.length === 0) {
					$target = $cate_side_bar
						.find('li[id="#' + $parent.attr('id') + '"]')
						.append($('<ul>'))
						.children('ul:last-of-type');
				} else {
					$target = $cate_side_bar.find('li[id="#' + $prev.attr('id') + '"]').parent('ul');
				}
			}

			$self.attr('id', id);

			$target && $('<li>').attr('id', '#' + id).text($self.children('h2,h3,h4,h5,h6').first().text()).appendTo($target);
		});
		// 导航点击事件
		$cate_side_bar.on('click', 'li', function($event) {
			var id = $(this).attr('id').substr(1);

			$content.find('section').each(function() {
				if ($(this).attr('id') === id) {
					$(window).scrollTop($(this).offset().top - 10);
					$event.stopImmediatePropagation();
				}
			});
		});
		// 添加右侧导航到页面
		$content.children('.container').children('.row').append($cate_side_bar);

		// 滚动监听
		$(window).on('scroll', function() {
			var $self = $(this),
				w_scrollTop = $self.scrollTop();

			// 右侧导航监测着色、展开、合并
			$content.find('section').each(function() {
				var $self = $(this),
					$li = $cate_side_bar.find('li[id="#' + $self.attr('id') + '"]'),
					dif = w_scrollTop - $self.offset().top;

				if (dif >= -15 && dif <= $self.outerHeight(true)) {
					$li.addClass('on-scroll').children('ul').slideDown(1000);
				} else {
					$li.removeClass('on-scroll').children('ul').slideUp(500);
				}
			});

			// 右侧导航自动浮动
			$cate_side_bar.css('position') == 'relative' && $cate_side_bar.offset({
				'top': Math.max(w_scrollTop, $cate_side_bar.parent().offset().top)
			});
		});
	}

	window.generateCateSideBar = generateCateSideBar;
});