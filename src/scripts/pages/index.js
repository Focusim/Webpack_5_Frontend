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
			},
			anchors: {
				nameAnchorLink: 'data-anchor-link',
				nameActiveElem: 'nav__item-anchor--active',
				nameAnchorSection: 'data-anchor',
				linkElements: document.querySelectorAll('[data-anchor-link]'),
				sections: document.querySelectorAll('[data-anchor]'),
				length: document.querySelectorAll('[data-anchor]').length,
				list: [],
				active: {
					name: '',
					topPoint: '',
					botPoint: '',
					firstSet: true,
				}
			},
		}

		this.init();
		this.burgerHandler(this.state.header.burger, document.body);
		this.initScrollContainers();
		this.vueComponents([vueHeadLottie, '#vue-head']);
		this.vueComponents([vueLaunchMoreLottie, '#vue-launch-more']);
		this.vueComponents([vueForm, '#vue-form-start']);
		window.onload = () => {
			this.initAnchors();
		}
	}

	init() {
		console.log('init JS main page');
	}

	initAnchors() {
		this.recalcAnchorValues();
		this.scrollAnchorHandler();
		this.initClickAnchorHandler(this.state.anchors.linkElements, this.state.anchors.length, this.state.anchors.list, this.state.anchors.nameAnchorLink);
		window.addEventListener('scroll', this.scrollAnchorHandler.bind(this));
		window.addEventListener('resize', this.recalcAnchorValues.bind(this));
	}

	recalcAnchorValues() {
		this.state.anchors.list = [];

		this.state.anchors.sections.forEach(section => { // set value
			this.state.anchors.list.push({
				name: section.getAttribute(this.state.anchors.nameAnchorSection),
				topPoint: section.getBoundingClientRect().top + window.pageYOffset,
				botPoint: section.getBoundingClientRect().top + window.pageYOffset + section.getBoundingClientRect().height,
			});
		});
	}

	scrollAnchorHandler() {
		const winPos = window.pageYOffset;

		// fix unnecessary code triggering
		if ((winPos <= this.state.anchors.active.topPoint || winPos >= this.state.anchors.active.botPoint) && this.state.anchors.active.firstSet) {

			for(let i = 0; i < this.state.anchors.length; i++) {
				const unit = this.state.anchors.list[i];

				if (unit.topPoint <= winPos && unit.botPoint >= winPos) {
					this.state.anchors.linkElements.forEach(el => {  // set || clear
						if (el.getAttribute(this.state.anchors.nameAnchorLink) === unit.name) { // set
							el.classList.add(this.state.anchors.nameActiveElem);
							this.state.anchors.active.name = el.getAttribute(this.state.anchors.nameAnchorLink);
							this.state.anchors.active.topPoint = unit.topPoint;
							this.state.anchors.active.botPoint = unit.botPoint;
						} else { // clear
							el.classList.remove(this.state.anchors.nameActiveElem);
						}
					});

					break;
				} else {
					this.state.anchors.linkElements.forEach(el => { el.classList.remove(this.state.anchors.nameActiveElem); });
				}
			}
		}
	}

	initClickAnchorHandler(arrElems, lengthArr, listPositionEl, linkToName) {
		arrElems.forEach((item, index, arr) => {
			item.addEventListener('click', () => {

				for(let i = 0; i < lengthArr; i++) {
					const section = listPositionEl[i];

					if (section.name === item.getAttribute(linkToName)) {
						window.scrollTo({
							top: section.topPoint + 1,
							behavior: 'smooth'
						});
						break;
					}
				}
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
