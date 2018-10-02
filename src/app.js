/*! Entry script file */

import $ from 'jquery';

/* Blog data */
import blog from 'Data/blog-data.json';

/* Router Plugin */
import 'Component/Router/Router.js';


/**
 * Render blog data
 */
$('.page-head').find('.name').text(blog.name).end()
	.find('.constellation').html(blog.constellation + '，<a href="' + blog.github + '" target="_blank">GitHub</a>').end()
	.find('.email').text(blog.email).end()
	.find('.English').text(blog.signature.English).end()
	.find('.Chinese').text(blog.signature.Chinese.content).end()
	.find('.Chinese-ref').text(blog.signature.Chinese.reference);


/**
 * Header animation
 */
fetch('./data/blog-data.json')
	.then(response => response.json())
	.then(data => {
		window.blog = data || {};

		document.querySelector('.page-head').classList.add('anim');
	})
	.catch(err => alert(err.message));


/**
 * Lazy Load
 */
const content = document.getElementById('content');

Router.add(['/home', /docs.*/, '/about', '/more'], () => {
	$(window).scrollTop(0);
	$('.H').remove();

	const loaded = content.getAttribute('loaded').split(','),
		state = Router.get_state_url()[0];

	if (!loaded.includes(state)) {
		import('Module/' + state + '/_' + state + '.js')
			.then(response => {
				loaded.push(state);
				content.setAttribute('loaded', loaded.join(','));

				Router._apply();
			})
			.catch(err => console.error(err.message));
	}
});

Router.have() ? Router._apply(): Router.switch('/home');