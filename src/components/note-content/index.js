/*! note content */

// @flow

import './style.scss';
import * as dayjs from 'dayjs';

/* utils */
function insert_code_line_num() {
  Array.from(
    document.querySelectorAll('.page-note-content pre > code')
  ).forEach((elem) => {
    const styles = getComputedStyle(elem);
    const _height =
      elem.scrollHeight -
      Number(styles.paddingTop.slice(0, -2)) -
      Number(styles.paddingBottom.slice(0, -2));
    const _lh = +styles['line-height'].slice(0, -2);

    let _num = Math.round(_height / _lh);

    let _line_number = [];

    while (_num--) {
      _line_number.push(_num + 1 + '\n');
    }

    elem.setAttribute('line-number', _line_number.reverse().join(' '));
  });
}

let h_datas = [],
  elem_h;

function generate_navigation() {
  h_datas = [];

  Array.from(document.querySelectorAll('h1, h2, h3, h4')).forEach((elem) => {
    h_datas.push({
      type: elem.tagName.toLowerCase(),
      top: elem.offsetTop,
      text: elem.textContent,
    });
  });

  elem_h = document.createElement('section');

  let _prefix = [-1, '.', -1, ' '],
    elem_h_childs = [];

  elem_h.classList.add('H');

  h_datas.forEach((h) => {
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
    Array.from(elem_h.querySelectorAll('p')).forEach((elem) => {
      elem.onclick = () => {
        window.scrollTo({
          top: elem.getAttribute('top') - 20,
          behavior: 'smooth',
        });
      };
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
  const view = `
		<main class="page-note-content note-content">
			<header class="container-fluid jumbotron">
				<div class="container">
					<h1 class="display-4">${file.title}</h1>
					<p class="lead">${file.summary}</p>
					<hr class="my-4">
					<div class="mb-3">
						${file.keywords
              .map(
                (keyword) =>
                  (file.tags.includes(keyword) &&
                    `<a class="btn btn-outline-dark btn-sm mr-2 mb-2" href="#/notes/${keyword}">${keyword}</a>`) ||
                  `<span class="btn btn-outline-dark btn-sm mr-2 mb-2">${keyword}</span>`
              )
              .join('')}
					</div>
					<div>
						<span class="badge badge-pill badge-light mr-3">${dayjs(file.ctime).format(
              'YYYY-MM-DD HH:mm'
            )} 添加</span>
						<span class="badge badge-pill badge-light">${dayjs(file.mtime).format(
              'YYYY-MM-DD HH:mm'
            )} 更新</span>
					</div>
				</div>
			</header>
			<main class="container">${html}</main>
		</main>
	`;

  setTimeout(() => {
    /* insert line num */
    insert_code_line_num();

    /* generate */
    generate_navigation();
  }, 300);

  return view;
};
/* eslint-enable */

/* events */
window.addEventListener('scroll', () => {
  if (!elem_h) return;

  const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop,
    doc_width = document.body.getBoundingClientRect().width;

  if (
    (doc_width > 768 && scrollTop > 376) ||
    (doc_width < 768 && scrollTop > 290)
  ) {
    elem_h.classList.add('scroll');
  } else {
    elem_h.classList.remove('scroll');
  }

  Array.from(elem_h.querySelectorAll('p')).forEach((elem) => {
    elem.classList.remove('active');
  });

  h_datas.some((h, i) => {
    if (scrollTop < h.top - 21) {
      Array.from(
        elem_h.querySelectorAll(`p[top="${h_datas[Math.max(0, i - 1)].top}"]`)
      ).forEach((elem) => {
        elem.classList.add('active');
      });
      return true;
    }
  });
});

export default NoteContent;
