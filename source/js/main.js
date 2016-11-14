$(function() {
	// 自动添加顶部进度条、footer、TOP
	$('body')
		.prepend($('<div id="progress-bar"></div>'))
		.append($('<footer class="page-footer"><div class="container"><div class="row"><div class="col-sm-2 col-sm-offset-2"><img class ="img-rounded img-responsive center-block" src="/source/images/head.png" alt="head" /></div><div class="col-sm-4 text-center"><p class="lead">越努力，越幸运！</p><p>Mr.Wang（不如怀念）</p><p>E-Mail：wangyuan230@163.com</p></div></div></div></footer>'))
		.append($('<nav id="foot-nav"><div id="to-top" style="display:none"><a href="#" class="fa fa-arrow-up"></a></div><div><a href="##" class="fa fa-home"></a></div><div><a href="##" class="fa fa-list"></a></div><div><a href="##" class="fa fa-navicon"></a></div></nav>'));
	// 自动添加右侧导航框架
	$('<div id="side-bar" class="col-md-3 visible-md-block visible-lg-block"></div>').appendTo($('body>.container>.row'));

	var $p_bar = $('#progress-bar'),
		$s_bar = $('#side-bar'),
		$top = $('#to-top');

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