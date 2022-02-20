/*! page index */

// @flow

import './style.scss';
import blog from 'utils/blog_data.json';

const Index = () => {
  const view = `
		<main class="page-index">
			<div class="index-name display-4">${blog.index_name}</div>
			<p class="index-title h4">${
        blog.index_title[Math.floor(Math.random() * blog.index_title.length)]
      }</p>
			<div class="go-down">
				<a class="btn btn-outline-dark btn-sm font-weight-bolder" href="mailto:${
          blog.email
        }" target="_blank" title="${blog.email}">
					Email
				</a>
				<a class="btn btn-outline-dark btn-sm font-weight-bolder" href="${
          blog.github
        }" target="_blank" title="wang1212-${blog.index_name}">
					GitHub
				</a>
				<a class="btn btn-outline-dark btn-sm font-weight-bolder" href="${
          blog.gitee
        }" target="_blank" title="wang1212-${blog.index_name}">
					Gitee
				</a>
			</div>
		</main>
	`;

  return view;
};

export default Index;
