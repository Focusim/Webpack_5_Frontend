import '../components/index/header';
import '../components/index/scroll';
import { createApp } from 'vue';
import Vue3LottieApp from 'vue3-lottie'
import vueHeadLottie from "@/vue/page/index/head.vue";
import vueForm from "@/vue/page/index/start.vue";
import vueLaunchMoreLottie from "@/vue/page/index/launch-more.vue";

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
