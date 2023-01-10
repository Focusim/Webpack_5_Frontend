export default class App {

	constructor() {

		this.state = {
			mediaSetting: {
				tablet: 768,
				mobile: 550,
			}
		}

		console.log('init JS App');
	}

	/**
	 * Find parent by selector (polyfill closest)
	 */
	findParentHandler(el, selector, stopSelector) {
		let retval = null;

		while (el) {
			if (el.matches(selector)) {
				retval = el;

				break;
			} else if (stopSelector && el.matches(stopSelector)) {
				break;
			}

			el = el.parentElement;
		}

		return retval;
	}
}
