import {setScrollingItemMouseScroll, setScrollingItemPadding} from "../components/scrollContainer";
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
				navAnchors: document.querySelectorAll('[data-anchor-link]')
			},
			anchors: {
				items: document.querySelectorAll('[data-anchor]'),
				length: document.querySelectorAll('[data-anchor]').length,
				list: [],
			},
		}

		this.init();
		this.burgerHandler(this.state.header.burger, document.body);
		this.initScrollContainers();
		this.vueComponents([vueHeadLottie, '#vue-head']);
		this.vueComponents([vueLaunchMoreLottie, '#vue-launch-more']);
		this.vueComponents([vueForm, '#vue-form-start']);
		this.initNavAnchors(this.state.header.navAnchors);
		window.onload = () => {
			this.initScrollAnchor(this.state.anchors.items)
		}
	}

	init() {
		console.log('init JS main page');
	}

	initScrollAnchor(arrAnchors) {
		arrAnchors.forEach(item => { // set value

			this.state.anchors.list.push({
				name: item.getAttribute('data-anchor'),
				topPoint: item.getBoundingClientRect().top + window.pageYOffset, // height header
				botPoint: item.getBoundingClientRect().top + window.pageYOffset + item.getBoundingClientRect().height,
			});
		});

		window.addEventListener('scroll', this.scrollAnchorHandler.bind(this));
		this.scrollAnchorHandler();
	}

	scrollAnchorHandler() {
		const winPos = window.pageYOffset;

		for(let i = 0; i < this.state.anchors.length; i++) {
			const section = this.state.anchors.list[i];

			if (section.topPoint <= winPos && section.botPoint >= winPos) {
				this.state.header.navAnchors.forEach(el => { el.classList.remove('nav__item-anchor--active'); }); // clear
				this.state.header.navAnchors.forEach(item => { // set
					if (item.getAttribute('data-anchor-link') === section.name) item.classList.add('nav__item-anchor--active');
				});

				break;
			} else {
				this.state.header.navAnchors.forEach(el => { el.classList.remove('nav__item-anchor--active'); });
			}
		}
	}

	initNavAnchors(arrAnchors) {
		arrAnchors.forEach((item, index, arr)=> {
			item.addEventListener('click', () => {

				for(let i = 0; i < this.state.anchors.length; i++) {
					const section = this.state.anchors.list[i];
					if (section.name === item.getAttribute('data-anchor-link')) {
						window.scrollTo({
							top: section.topPoint + 1,
							behavior: 'smooth'
						});
						break;
					}
				}

				//arr.forEach(el => { el.classList.remove('nav__item-anchor--active'); });
				//item.classList.add('nav__item-anchor--active');
			});
		});
	}

	burgerHandler(arrBurger, body) {
		arrBurger.forEach(element => {
			element.addEventListener('click', (event) => {
				body.classList.toggle('burger-menu--open');
			});
		});
	}

	initScrollContainers() {
		document.addEventListener("DOMContentLoaded", () => {
			setScrollingItemPadding();
			setScrollingItemMouseScroll(1);
		});

		window.addEventListener("resize",  () => {
			setScrollingItemPadding();
		});
	}

	vueComponents([component, selector]) {
		const element = document.querySelector(`${selector}`);
		if (element) createApp(component).use(Vue3LottieApp, { name: 'vue3-lottie-player' }).mount(element);
	}
}

new MainPage();
