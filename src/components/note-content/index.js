/*! note content */

// @flow

import './style.scss';


/* utils */
function insert_code_line_num () {
	Array.from(document.querySelectorAll('.page-note-content pre > code')).forEach(elem => {
		const _height = elem.offsetHeight,
			_lh = +getComputedStyle(elem)['line-height'].match(/[\d.]+/);

		let _num = Math.ceil(_height / _lh);

		let _line_number = [];

		while (_num--) {
			_line_number.push(_num + 1 + '\n');
		}

		elem.setAttribute('line-number', _line_number.reverse().join(' '));
	});
}


let h_datas = [],
	elem_h;

function generate_navigation () {
	h_datas = [];

	Array.from(document.querySelectorAll('h1, h2, h3, h4')).forEach(elem => {
		h_datas.push({
			type: elem.tagName.toLowerCase(),
			top: elem.offsetTop,
			text: elem.textContent
		});
	});

	elem_h = document.createElement('section');

	let _prefix = [-1, '.', -1, ' '],
		elem_h_childs = [];

	elem_h.classList.add('H');

	h_datas.forEach(h => {
		let _text = h.text;

		if (h.type === 'h2') {
			_prefix[0] = _prefix[0] + 1;
			_prefix[2] = -1;

			_text = _prefix[0] + ' ' + _text;
		} else if (h.type === 'h3') {
			_prefix[2] = _prefix[2] + 1;

			_text = _prefix.join('') + _text;
		}

		elem_h_childs.push(`
			<p class="H-${h.type}" type="${h.type}" top="${h.top}">${_text}</p>
		`);
	});

	elem_h_childs.push(`
		<span class="hide material-icons">close</span>
	`);

	elem_h.innerHTML = elem_h_childs.join('');

	document.getElementById('Content').appendChild(elem_h);

	/* events */
	setTimeout(() => {
		Array.from(elem_h.querySelectorAll('p')).forEach(elem => {
			elem.onclick = () => (document.documentElement.scrollTop = document.body.scrollTop = elem.getAttribute('top') - 20);
		});

		elem_h.querySelector('.hide').onclick = function () {
			if (elem_h.classList.contains('hide')) {
				elem_h.classList.remove('hide');
				this.textContent = 'close';
			} else {
				elem_h.classList.add('hide');
				this.textContent = 'menu';
			}
		};
	}, 300);

}


/* views */
/* eslint-disable */
const NoteContent = ({ file, html }) => {

	setTimeout(() => {
		/* insert line num */
		insert_code_line_num();

		/* generate */
		generate_navigation();
	}, 300);

	return (`
		<main class="page-note-content note-content">
			<header class="container-fluid jumbotron">
				<div class="container">
					<h1 class="display-4">${file.title}</h1>
					<p class="lead">${file.summary}</p>
					<hr class="my-4">
					<div class="mb-3">
						${
							file.keywords.map(keyword => `
								<a class="btn btn-outline-dark btn-sm mr-2 mb-2" href="#/notes/${keyword}">${keyword}</a>
							`).join('')
						}
					</div>
					<div>
						<span class="badge badge-pill badge-light mr-3">${file.ctime[0].join('-')}  ${file.ctime[1].slice(0, 2).join(':')} 添加</span>
						<span class="badge badge-pill badge-light">${file.mtime[0].join('-')}  ${file.mtime[1].slice(0, 2).join(':')} 更新</span>
					</div>
				</div>
			</header>
			<main class="container">${html}</main>
		</main>
	`);

};
/* eslint-enable */


/* events */
window.addEventListener('scroll', () => {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
		doc_width = document.body.getBoundingClientRect().width;

	if (doc_width > 768 && scrollTop > 376 || doc_width < 768 && scrollTop > 290) {
		elem_h.classList.add('scroll');
	} else {
		elem_h.classList.remove('scroll');
	}

	Array.from(elem_h.querySelectorAll('p')).forEach(elem => {
		elem.classList.remove('active');
	});

	h_datas.some((h, i) => {
		if (scrollTop < h.top - 21) {
			Array.from(elem_h.querySelectorAll(`p[top="${h_datas[Math.max(0, i - 1)].top}"]`)).forEach(elem => {
				elem.classList.add('active');
			});
			return true;
		}
	});
});



export default NoteContent;