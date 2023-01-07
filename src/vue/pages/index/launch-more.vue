<template lang="pug">
.launch-more-slider
	.controller
		.controller__inner.js-slider-scrolling-x(ref="controller")
			.controller__item(
				ref="controllerItems"
				v-for="item in controllerList"
				@click="controllerChange(item.id)"
				:class="{'controller__item--active': (item.id === expositionSelect)}"
			)
				.controller__img(:data-text="item.text")
					img(:src="item.img")
				.controller__text(v-html="item.text")
	swiper(
		@slideChange="onSlideChange"
		:pagination=`{
			clickable: true
		}`
		:mousewheel=`{
			sensitivity: 1,
			forceToAxis: true,
		}`
		:threshold="50"
		:free-mode=`{
			enabled: false,
			momentum: true,
			momentumBounceRatio: 1,
			momentumRatio: 1,
			momentumVelocityRatio: 1,
		}`
		:slides-per-view="1"
		:breakpoints=`{
			1: {
				spaceBetween: 10,
			},
			501: {
				spaceBetween: 30,
			},
		}`
	)
		swiper-slide.swiper-slide(
			v-for="(item, index) in expositionList"
			:class="{'showing__item--active': (item.id === expositionSelect)}"
			@click="slideClick(index)"
		)
			vue3-lottie-player(
				ref="lottie"
				:animationLink="item.link"
				:speed="1"
				:autoPlay="false"
				:loop="false"
				style="width: 100%; height:auto;"
			)
</template>

<script>
import Vue3Lottie from 'vue3-lottie'
import {Swiper, SwiperSlide} from "swiper/vue";
import SwiperCore, { Mousewheel, FreeMode, Pagination } from 'swiper';
SwiperCore.use([Mousewheel, FreeMode, Pagination ]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default {
	name: "launch-more",
	components: {
		v3LottiePlayer: Vue3Lottie,
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			pagination: [],
			expositionSelect: 1,
			controllerList: [
				{
					id: 1,
					text: 'Product recommendation',
					img: '/lottie/index/launch-more/product-recommendation.svg',
				},
				{
					id: 2,
					text: 'Pop-ups',
					img: '/lottie/index/launch-more/pop-ups.svg',
				},
				{
					id: 3,
					text: 'SMS',
					img: '/lottie/index/launch-more/sms.svg',
				},
				{
					id: 4,
					text: 'Email',
					img: '/lottie/index/launch-more/email.svg',
				},
				{
					id: 5,
					text: 'Mobile push',
					img: '/lottie/index/launch-more/mobile-push.svg',
				},
				{
					id: 6,
					text: 'Web push',
					img: '/lottie/index/launch-more/web-push.svg',
				},
				{
					id: 7,
					text: 'Loyalty',
					img: '/lottie/index/launch-more/loyalty.svg',
				},
				{
					id: 8,
					text: 'Ad optimization',
					img: '/lottie/index/launch-more/ad-optimization.svg',
				},
			],
			expositionList: [
				{
					id: 1,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 2,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 3,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 4,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 5,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 6,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 7,
					link: '/lottie/index/launch-more/pers.json',
				},
				{
					id: 8,
					link: '/lottie/index/launch-more/pers.json',
				},
			]
		}
	},
	mounted() {
		this.pagination = document.querySelectorAll('.launch-more-slider .swiper-pagination-bullet');
	},
	methods: {
		scrollControllItem() {
			const container = this.$refs.controller;
			const activeIndex = this.expositionSelect;
			const activeItem = this.$refs.controllerItems[activeIndex - 1];
			const posLeft = activeItem.getBoundingClientRect().left;
			const padding = Number.parseInt(window.getComputedStyle(document.querySelector('.container')).paddingRight);

			container.scrollBy({
				left: posLeft - padding,
				behavior: 'smooth',
			});
		},

		controllerChange(index) {
			this.expositionSelect = index;
			this.pagination[this.expositionSelect - 1].click();
		},

		onSlideChange(swiper) {
			this.expositionSelect = swiper.activeIndex + 1
			this.animChange();
			this.scrollControllItem();
		},

		animChange() {
			this.$refs.lottie.forEach((el, index) => {
				el.stop();

				if ((index + 1) === this.expositionSelect) {
					el.play();
				}
			})
		},

		slideClick(index) {
			this.expositionSelect = index + 1;
			this.pagination[this.expositionSelect - 1].click();
		}
	}
}
</script>

<style scoped lang="scss">
// styles in scss files //
</style>
