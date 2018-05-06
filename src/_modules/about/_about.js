/*! About page script */

import $ from 'jquery';

/* Blog data */
import blog from 'Data/blog-data.json';

Router.add('/about', () => {

	document.title = '关于我-不如怀念';

	let $dom = $('<div></div>');

	/* top */
	$dom.append(
		'<section class="text-center mb-3">' +
			'<p class="h2 text-muted font-italic font-weight-light">' + blog.about.top + '</p>' +
		'</section>'
	);	

	/* I think */
	$dom.append(
		'<section class="text-center mb-3">' +
			'<h3><span class="head d-inline-block">I Think</span></h3>' +
			'<p class="font-weight-light">' + blog.about.I_Think + '</p>' +
		'</section>'
	);

	/* Career */
	$dom.append(
		'<section class="text-center mb-3">' +
            '<h3><span class="head d-inline-block">Career</span></h3>' +
            '<p class="font-weight-light">' + blog.about.Career + '</p>' +
        '</section>'
	);    

	/* Technology-Stack */
	let _stack = '';

	Object.keys(blog.about.Technology_Stack).forEach((key, index) => {
		let _items = '';

		blog.about.Technology_Stack[key].forEach(item => {
			_items += 
                '<div class="progress mb-2">' +
                    '<div class="progress-bar" role="progressbar" aria-valuenow="' + item[1].match(/\d+/) + '" aria-valuemin="0" aria-valuemax="100">' + item[0] + '</div>' +
                '</div>';
		});

		_stack += 
            '<section class="mb-3">' +
                '<h4 class="text-left font-weight-light">' + key + '</h4>' +
                '<div>' + _items + '</div>' +
            '</section>';
	});

	$dom.append(
		'<section class="text-center mb-3">' +
            '<h3><span class="head d-inline-block">Technology Stack</span></h3>' +
            _stack +
        '</section>'
	);   

	/* Constellation */
	$dom.append(
		'<section class="text-center mb-3">' +
			'<h3><span class="head d-inline-block">' + blog.constellation + '</span></h3>' +
			'<p class="font-weight-light">' + blog.about.Constellation + '</p>' +
		'</section>'
	);

	/* Like */
	let _like = '';

	blog.about.Like.forEach(item => {
		_like += '<p class="font-weight-light">' + item + '</p>';
	});

	$dom.append(
		'<section class="text-center mb-3">' +
			'<h3><span class="head d-inline-block">Like</span></h3>' +
			_like +
		'</section>'
	);

	/* Now */
	let _now = '';

	blog.about.Now.forEach(item => {
		_now += '<p class="font-weight-light">' + item + '</p>';
	});

	$dom.append(
		'<section class="text-center mb-3">' +
			'<h3><span class="head d-inline-block">Now</span></h3>' +
			_now +
		'</section>'
	);

	/* E-mail */
	$dom.append(
		'<section class="text-center mb-3">' +
			'<h3><span class="head d-inline-block">E-mail</span></h3>' +
			'<p class="font-weight-light">' + blog.about.E_mail + '</p>' +
		'</section>'
	); 	

	$('#content').fadeOut('fast', function () {
		$(this).attr('content', 'about').html($dom.children()).fadeIn(function() {
			/* Animation */
			$(this).find('.progress-bar').each((index, item) => {
				$(item).css('width', $(item).attr('aria-valuenow') + '%');
			});
		});
	});

});