$(function() {
	// 自动添加顶部进度条、footer、TOP
	$('body')
		.prepend($('<div id="progress-bar"></div>'))
		.append($('<footer class="page-footer"><div class="container"><div class="row text-xs-center"><div class="col-md-2 offset-md-2"><img class="rounded" src="/source/images/head.jpg" alt="head" /></div><div class="col-md-4"><p class="lead">越努力，越幸运！</p><p>Mr.Wang（不如怀念）</p><p>E-mail：wangyuan230@163.com</p></div></div></div></footer>'))
		.append($('<nav id="foot-nav"><div id="to-top" style="display:none"><a href="#" class="fa fa-arrow-up"></a></div><div><a href="/" class="fa fa-home"></a></div><div><a href="/categories/" class="fa fa-list-alt"></a></div></nav>'));
	// 自动添加右侧导航框架
	$('<div id="side-bar" class="col-md-3 hidden-sm-down"></div>').appendTo($('body>.container>.row'));

	var $p_bar = $('#progress-bar'),
		$s_bar = $('#side-bar'),
		$top = $('#to-top');

	// 自动添加分页
	$.getJSON('/source/json/categories.json', function(data) {
		var title = $('h1').text(),
			cate = $('#categories').text().match(/[\w-]+/).join(),
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
				str += '<li class="page-item float-xs-left"><a class="page-link" href="' + temp[prev].path + '" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span> ' + temp[prev].title + '</a></li>';
			}
			if (!isNaN(next)) {
				str += '<li class="page-item float-xs-right"><a class="page-link" href="' + temp[next].path + '" aria-label="Previous">' + temp[next].title + ' <span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li > ';
			}
			str += '</ul></nav>';
			$('body > .container .col-md-9').append($(str));
		}
	});

	// 自动遍历生成目录导航
	$('section').each(function() {
		var $self = $(this),
			$parent = $self.parent('section'),
			$prev = $self.prevAll('section'),
			$target,
			id;

		if ($parent.length === 0) {
			id = 'paragraph' + $prev.length;
			$target = $s_bar.children('ul');

			if ($target.length === 0) {
				$target = $s_bar
					.append($('<ul>'))
					.children('ul');
			}

		} else {
			id = $parent.attr('id') + '-' + $prev.length;

			if ($prev.length === 0) {
				$target = $s_bar
					.find('a[href="#' + $parent.attr('id') + '"]')
					.closest('li')
					.append($('<ul>'))
					.children('ul');
			} else {
				$target = $s_bar
					.find('a[href="#' + $prev.attr('id') + '"]')
					.closest('ul');
			}
		}

		$self.attr('id', id);

		// 生成目录导航
		if ($target) {
			$('<li>')
				.append($('<a>')
					.attr('href', '#' + id)
					.text($self.children('h2,h3,h4,h5,h6').text())
				).appendTo($target);
		}

	});

	// 滚动监听
	$(window).on('scroll', function() {
		var $self = $(this),
			$body = $('body'),
			w_scrollTop = $self.scrollTop();
		// 顶部进度条
		$p_bar.width((w_scrollTop + $self.height()) / $body.height() * $self.width());

		// 右侧导航监测着色、展开、合并
		$('section').each(function() {
			var $self = $(this),
				$a = $('a[href="#' + $self.attr('id') + '"]'),
				dif = w_scrollTop - $self.offset().top;

			if (dif >= -20 && dif <= $self.outerHeight(true)) {
				$a.addClass('on-scroll').siblings('ul').css('display', 'block');
			} else {
				$a.removeClass('on-scroll').siblings('ul').css('display', 'none');
			}
		});

		// 右侧导航自动浮动
		$('#side-bar').offset({
			'top': Math.max(w_scrollTop + 10, $('#side-bar').parent().offset().top + 10)
		});

		// 回到顶部自动隐藏
		w_scrollTop > $self.height() ? $top.show(1000) : $top.hide(1000)

	});
});