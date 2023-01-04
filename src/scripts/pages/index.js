import '../components/index/scroll';
import { createApp } from 'vue';
import Vue3LottieApp from 'vue3-lottie'
import vueHeadLottie from "@/vue/pages/index/head.vue";
import vueForm from "@/vue/pages/index/start.vue";
import vueLaunchMoreLottie from "@/vue/pages/index/launch-more.vue";

class MainPage {
	constructor() {

		this.state = {
			header: {
				selector: document.querySelector('header.header'),
				burger: document.querySelectorAll('[data-burger-btn]'),
			}
		}

		this.init();
		this.burgerHandler(this.state.header.burger, document.body);
		this.vueComponents([vueHeadLottie, '#vue-head']);
		this.vueComponents([vueLaunchMoreLottie, '#vue-launch-more']);
		this.vueComponents([vueForm, '#vue-form-start']);
	}

	init() {
		console.log('init JS main page');
	}

	burgerHandler(arrBurger, body) {
		arrBurger.forEach(element => {
			element.addEventListener('click', (event) => {
				body.classList.toggle('burger-menu--open')
			});
		});
	}

	vueComponents([component, selector]) {
		const element = document.querySelector(`${selector}`);
		if (element) createApp(component).use(Vue3LottieApp, { name: 'vue3-lottie-player' }).mount(element);
	}
}

new MainPage();
