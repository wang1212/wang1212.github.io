/*! Home page script */

import $ from 'jquery';

/* Blog data */
import blog from 'Data/blog-data.json';

Router.add('/home', () => {

	document.title = '主页-不如怀念';

	let $dom = $(
		'<div class="row">' +
			'<section class="cards col-md-8"></section>' +
			'<section class="side col-md-4 d-none d-md-block"></section>' +
		'</div>'
	);

	/* left Card */
	blog.home.card.forEach(item => {
		let _text = '';

		item.content.text.forEach(p => _text += '<p class="card-text p-text">' + p + '</p>');

		let _link = '';

		item.link && Object.keys(item.link).forEach(key => _link += '<a class="btn btn-secondary" href="' + item.link[key] + '" target="_blank" role="button">' + key + '</a>' );

		$dom.find('.cards').append(
			'<section class="card mb-3">' + 
				(item.content.img ? ('<img class="card-img-top" src="' + item.content.img + '" alt="card img cap">') : '') +
				'<div class="card-body">' +
					'<h3 class="card-title text-center">' + item.title + '</h3>' +
					_text +
					(_link ? ('<div class="btn-group justify-content-center" style="width: 100%">' + _link + '</div>'): '') +
					'<p class="card-text text-right"><small class="text-muted">' + item.time + '</small></p>' +
				'</div>' +
			'</section>'
		);
	});

	/* right links */
	$dom.find('.side').append(
		'<section class="links">' +
			'<h3 class="head mb-3">Useful Links</h3>' +
			'<div class="list"></div>' +
		'</section>'
	);

	blog.home.link.forEach(link => {
		$dom.find('.side > .links > .list').append(
			'<a class="font-weight-light mb-1 d-block" href="' + link[1] + '" target="_blank">' + link[0] + '</a>'	
		);
	});

	$('#content').fadeOut('fast', function(){
		$(this).attr('content', 'home').html($dom).fadeIn();	
	});

});