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
			$('#index-footer').removeClass('col-xl-9 offset-xl-3 col-md-8 offset-md-4');
			$progress_bar.css('display', 'none');

			// homepage
			if (url_index === 0) {
				$index_nav.addClass('hidden-md-up');
			} else {
				$index_nav.removeClass('hidden-md-up');
			}
			// categories.index
			if (url_index === 1 && $list.length && $content.length) {
				return $content.fadeOut(300, function() {
					$(this).empty();
					$list.fadeIn(1000);
					$(window).scrollTop(0);
					// Change page title
					document.title = $('.page-title').last().text() || '不如怀念';
				});
			}
			// book_of_ruby.index
			if (url_index === 2) {
				$('#index-footer').addClass('col-xl-9 offset-xl-3 col-md-8 offset-md-4');
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
					} else if (url_index === 2) {
						// book_of_ruby.index 自动加载首页
						return $content.fadeIn(1000) && showContent('/book_of_ruby/homepage');
					}
					// categories... 生成侧边导航
					if (url_index != 1 && url.match('/categories/')) {
						generateCateSideBar();
						$to_close.css('display') == 'none' && $to_open.css('display', 'block');
					}
					// book_of_ruby... 生成侧边导航
					if (url_index != 2 && url.match('/book_of_ruby/')) {
						generateRubySideBar($('#ruby-side-bar').find('a[href="/#' + url + '"]').parent('li'));
						$to_close.css('display') == 'none' && $to_open.css('display', 'block');
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
			})
			.always(function() {
				$(window).scrollTop(0);
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
		var $content = $('#content'),
			w_scrollTop = $win.scrollTop();
		// Progress
		if ($content && $content.css('display') != "none") {
			$progress_bar.width((w_scrollTop + $win.height()) / $content.height() * $win.width());
			$progress_bar.css('display', 'block');
		}
		// Top
		w_scrollTop > $win.height() ? $to_top.show(1000) : $to_top.hide(1000);
	});

	$to_top.on('click', function() {
		$win.scrollTop(0);
	});

	$to_open.on('click', function() {
		var $cate_side_bar = $('#cate-side-bar'),
			$ruby_side_bar = $('#ruby-side-bar'),
			$sideBar = $cate_side_bar.length ? $cate_side_bar : $ruby_side_bar.length ? $ruby_side_bar : '';

		$sideBar && $sideBar.animate({
			left: '0px'
		});

		$to_open.fadeOut(300, function() {
			$to_close.fadeIn(800);
		});
	});

	$to_close.on('click', function() {
		var $cate_side_bar = $('#cate-side-bar'),
			$ruby_side_bar = $('#ruby-side-bar'),
			$sideBar = $cate_side_bar.length ? $cate_side_bar : $ruby_side_bar.length ? $ruby_side_bar : '';

		$sideBar && $sideBar.animate({
			left: -$sideBar.outerWidth()
		});

		$to_close.fadeOut(300, function() {
			$to_open.fadeIn(800);
		});
	});
});

// SideBar
$(function() {

	function generateCatelog($content, $sideBar) {
		var $others = $sideBar.siblings('li');

		// 清除导航数据
		$others.length && $others.find('ul').slideUp(500, function() {
			$(this).remove();
		});
		// 清除已有导航数据
		$sideBar.find('ul').remove();

		// 自动遍历生成导航目录
		$content.find('section').each(function() {
			var $self = $(this),
				$parent = $self.parent('section'),
				$prev = $self.prevAll('section'),
				$target,
				id;

			if ($parent.length === 0) {
				id = 'paragraph' + $prev.length;
				$target = $sideBar.children('ul');

				if ($target.length === 0) {
					$target = $sideBar.append($('<ul>')).children('ul:last-of-type');
				} else {
					$target = $target.last();
				}
			} else {
				$parent = $parent.last();
				id = $parent.attr('id') + '-' + $prev.length;

				if ($prev.length === 0) {
					$target = $sideBar.find('span[id="#' + $parent.attr('id') + '"]').parent('li').append($('<ul>')).children('ul:last-of-type');
				} else {
					$target = $sideBar.find('span[id="#' + $prev.attr('id') + '"]').parent('li').parent('ul');
				}
			}

			$self.attr('id', id);

			$target && $('<li>').append($('<span>').attr('id', '#' + id).text($self.children('h2,h3,h4,h5,h6').first().text())).appendTo($target);
		});

		// 导航点击事件
		$sideBar.on('click', 'span[id^="#"]', function() {
			var id = $(this).attr('id').substr(1);

			$content.find('section').each(function() {
				if ($(this).attr('id') === id) {
					$(window).scrollTop($(this).offset().top - 10);
				}
			});
		});

		// 滚动监听
		$(window).on('scroll', function() {
			var $self = $(this),
				w_scrollTop = $self.scrollTop();

			// 右侧导航监测着色、展开、合并
			$content.find('section').each(function() {
				var $self = $(this),
					$span = $sideBar.find('span[id="#' + $self.attr('id') + '"]'),
					dif = w_scrollTop - $self.offset().top;

				if (dif >= -15 && dif <= $self.outerHeight(true) - 15) {
					$span.addClass('on-scroll').siblings('ul').slideDown(1000);
				} else {
					$span.removeClass('on-scroll').siblings('ul').slideUp(500);
				}
			});

			// 右侧导航自动浮动
			$sideBar.css('position') == 'relative' && $sideBar.offset({
				'top': Math.max(w_scrollTop, $sideBar.parent().offset().top)
			});
		});

		// 显示
		$sideBar.find('ul').slideDown(1000);
	}

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

		// 创建导航
		var $cate_side_bar = $('<div id="cate-side-bar" class="col-md-3 col-sm-8 col-xs-10 text-xs-left"><p class="h3">' + title + '</p></div>');

		generateCatelog($content, $cate_side_bar);

		// 添加导航到页面
		$content.children('.container').children('.row').append($cate_side_bar);
	}

	window.generateCateSideBar = generateCateSideBar;

	function generateRubySideBar($sideBar) {
		generateCatelog($('#content'), $sideBar);
	}

	window.generateRubySideBar = generateRubySideBar;
});