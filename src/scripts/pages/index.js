import '../components/index/header';
import '../components/index/scroll';
import { createApp } from 'vue';
import Vue3LottieApp from 'vue3-lottie'
import vueHeadLottie from "@/vue/index/head.vue";
import vueForm from "@/vue/index/start.vue";
import vueLaunchMoreLottie from "@/vue/index/launch-more.vue";

class MainPage {
	constructor() {

		this.init();
		this.vueComponents([vueHeadLottie, '#vue-head']);
		this.vueComponents([vueLaunchMoreLottie, '#vue-launch-more']);
		this.vueComponents([vueForm, '#vue-form-start']);
	}

	init() {
		console.log('init JS main page');
	}

	vueComponents([component, selector]) {
		const element = document.querySelector(`${selector}`);
		if (element) createApp(component).use(Vue3LottieApp, { name: 'vue3-lottie-player' }).mount(element);
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
