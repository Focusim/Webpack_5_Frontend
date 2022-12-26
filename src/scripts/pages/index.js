import '../components/index/header';
import '../components/index/scroll';
import { createApp } from 'vue';
import headVue from "@/vue/index/head.vue";
import launchMoreVue from "@/vue/index/launch-more.vue";

class MainPage {
	constructor() {

		this.init();
		this.vueComponents([launchMoreVue, '#vue-launch-more']);
		this.vueComponents([headVue, '#vue-head']);
	}

	init() {
		console.log('init JS main page');
	}

	vueComponents([component, selector]) {
		const element = document.querySelector(`${selector}`);
		if (element) createApp(component).mount(element);
	}
}

new MainPage();
















// //
// // Vue Init:
// //
// import { createApp } from 'vue';
// import SwiperSlider from '@/vue/swiper-slider.vue';
// import lottieVue from "@/vue/lottie-vue.vue";
//
// //
// // slider
// //
// const AppSelector = document.querySelector('#swiper-slider');
// if (AppSelector) createApp(SwiperSlider).mount(AppSelector);
//
// //
// // lottie
// //
// const LottieSelector = document.querySelector('#lottie-vue');
// if (LottieSelector) createApp(lottieVue).mount(LottieSelector);
//
//
//
//
//
//
// (function () {
// 	const elem = document.querySelector('#swiper-slider');
// 	scrollHandler();
//
// 	window.addEventListener('scroll', scrollHandler)
//
// 	function scrollHandler() {
// 		const cardElem = elem.getClientRects()[0];
// 		const cardPos = cardElem.y;
// 		const cardHeight = cardElem.height;
//
// 		if ((cardPos + cardHeight / 2) <= window.innerHeight && (cardPos + cardHeight / 2) >= 0) {
// 			elem.classList.add('_visible');
// 			window.removeEventListener('scroll', scrollHandler);
// 			return false;
// 		}
// 	}
// }());
