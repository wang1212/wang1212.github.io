// helpers

/**
 * debounce function
 */
export function debounce(fn, milliseconds) {
	let timer;

	return () => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fn.apply(null, arguments);
		}, milliseconds);
	};
}
