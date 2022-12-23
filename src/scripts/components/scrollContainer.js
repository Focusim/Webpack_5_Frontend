function setScrollingItemPadding() {
	let container = document.querySelector('.js-slider-scroll-container');

	if (!container) return false;

	let containerOffset = container.getBoundingClientRect().left;
	let containerPadding = Number.parseInt(window.getComputedStyle(container).paddingRight);
	let scrollingItems = document.querySelectorAll(".js-slider-scrolling-x");

	scrollingItems.forEach((item) => {
		item.style.paddingRight = containerPadding + containerOffset + "px";
		item.style.paddingLeft = containerPadding + containerOffset + "px";
	})
}

function setScrollingItemMouseScroll(speed = 2) {
	let scrollingItems = document.querySelectorAll(".js-slider-scrolling-x");
	scrollingItems.forEach((item) => {
		let drag = false;
		let left = 0;
		let positionX = 0;

		item.addEventListener("mousedown", function (event) {
			if (event.which == 1) {
				drag = true;
				positionX = event.pageX - this.offsetLeft;
			}
		})

		document.addEventListener("mouseup", function () {
			drag = false;
			left = item.scrollLeft;
		})

		item.addEventListener("mousemove", function (event) {
			if (drag) {
				this.scrollLeft = left - (event.pageX - this.offsetLeft - positionX) * speed;
			}
		})

		item.addEventListener("scroll", function (event) {
			if (!drag) {
				left = this.scrollLeft;
			}
		})
	})
}

export {setScrollingItemPadding, setScrollingItemMouseScroll};
