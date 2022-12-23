import {setScrollingItemMouseScroll, setScrollingItemPadding} from "../../components/scrollContainer";
document.addEventListener("DOMContentLoaded", function() {
	setScrollingItemPadding();
	setScrollingItemMouseScroll(1);
});
window.addEventListener("resize", function () {
	setScrollingItemPadding();
});
