/*! loading Component */

// @flow

import './style.scss';

/* views */
const Loading = () => {
  return `
		<div class="Loading d-flex justify-content-center align-items-center">
			<div class="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	`;
};

export default Loading;
