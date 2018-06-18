/*! MORE page script */

import $ from 'jquery';

/* Blog data */
import blog from 'Data/blog-data.json';

Router.add('/more', () => {

	document.title = '更多-不如怀念';

	let $dom = $('<div></div>');

	/* top */
	$dom.append(
		'<section class="text-center mb-3">' +
            '<p class="h2 text-muted font-italic font-weight-light">The perfect thing</p>' +
        '</section>'
	);

	let $books = $('<section class="col-md-6"><h3 class="font-weight-light">Books</h3><main class="pr-2"></main></section>');

	blog.more.books.forEach(book => {
		$books.find('main').append(
			'<div class="book p-2 mb-2">' +
                '<p class="h5 name">' + book.name + '</p>' +
                '<p class="summary">' + book.summary + '</p>' +
                '<p class="author mb-0 text-right font-italic">' + book.author + '</p>' +
            '<div>'
		);
	});


	let $movies = $('<section class="col-md-6"><h3 class="font-weight-light text-md-right">Movies</h3><main class="pr-2"></main></section>');
    
	blog.more.movies.forEach(movie => {
		$movies.find('main').append(
			'<div class="movie p-2 mb-2">' +
            '<p class="h5 name">' + movie.name + '</p>' +
            '<p class="summary">' + (movie.summary || '') + '</p>' +
            '<p class="author mb-0 text-right font-italic">' + movie.author + '</p>' +
            '<div>'
		);
	});   
    
	$dom.append($('<div class="row"></div>').append($books, $movies));

	$('#content').fadeOut('fast', function () {
		$(this).attr('content', 'more').html($dom.children()).fadeIn();
	});

});