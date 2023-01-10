import {setScrollingItemMouseScroll, setScrollingItemPadding} from "../components/scrollContainer";
import { createApp } from 'vue';
import Vue3LottieApp from 'vue3-lottie'
import vueHeadLottie from "@/vue/pages/index/head.vue";
import vueForm from "@/vue/pages/index/start.vue";
import vueLaunchMoreLottie from "@/vue/pages/index/launch-more.vue";
import App from '../main';

class IndexPage extends App {

	constructor(props) {
		super(props);

		this.state = {
			header: {
				selector: document.querySelector('header.header'),
				burger: document.querySelectorAll('[data-burger-btn]'),
				burgerName: 'js-burger',
				navName: 'js-nav',
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
				}
			},
			mediaSetting: {
				tablet: 768,
				mobile: 550,
			}
		}

		this.burgerHandler(this.state.header.burger, document.body);
		this.initScrollContainers();
		this.vueComponents([vueHeadLottie, '#vue-head']);
		this.vueComponents([vueLaunchMoreLottie, '#vue-launch-more']);
		this.vueComponents([vueForm, '#vue-form-start']);
		this.initAnchors();
		document.addEventListener('click', this.clickHandler.bind(this));
		console.log('init JS index page');
	}

	clickHandler(ev) {
		this.sidebarMenuController(ev);
	}

	sidebarMenuController(ev) {
		const menuSide = this.findParentHandler(ev.target, '.' + this.state.header.navName);
		const burger = this.findParentHandler(ev.target, '.' + this.state.header.burgerName);
		if (!menuSide && !burger) document.body.classList.remove('burger-menu--open');
	}

	initAnchors() {
		this.recalcAnchorValues();
		this.scrollAnchorHandler();
		window.addEventListener('scroll', this.scrollAnchorHandler.bind(this));
		window.addEventListener('resize', this.recalcAnchorValues.bind(this));
		window.onload = () => { // recalculate after load page
			this.recalcAnchorValues();
			document.addEventListener('click', this.recalcAnchorValues.bind(this));
		}
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

		this.initClickAnchorHandler(this.state.anchors.linkElements, this.state.anchors.length, this.state.anchors.list, this.state.anchors.nameAnchorLink);
	}

	scrollAnchorHandler() {
		const winPos = window.pageYOffset;

		// fix unnecessary code triggering
		if (winPos <= this.state.anchors.active.topPoint || winPos >= this.state.anchors.active.botPoint) {

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

new IndexPage();
