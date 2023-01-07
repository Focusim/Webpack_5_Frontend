<template lang="pug">
.showing
	.controller
		.controller__inner.js-slider-scrolling-x(ref="controller")
			.controller__item(
				ref="controllerItems"
				v-for="item in controllerList"
				@click="controllerChange(item.id)"
				:class="{'controller__item--active': (item.id === expositionSelect)}"
			)
				.circles(v-if="item.value && item.img")
					.circles__img
						img(:src="item.img")
					.circles__value(v-html="item.value")
				.controller__item-text(v-html="item.text")
	.showing__wrapper
		.showing__item(
			v-for="item in expositionList"
			:class="{'showing__item--active': (item.id === expositionSelect)}"
		)
			lottie-player(
				ref="lottie"
				v-show="item.id === expositionSelect"
				:src="item.link"
				:speed="1"
				@complete="complete"
				autoplay
				style="width: 100%; height:auto;"
			)
</template>

<script>
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

export default {
	name: 'head',
	components: {
		vLottiePlayer: LottieVuePlayer,
	},
	data() {
		return {
			expositionSelect: 1,
			controllerList: [
				{
					id: 1,
					text: 'App user with upcoming birthday',
					img: '/lottie/index/head/controller-tap-1.jpg',
					value: '15K'
				},
				{
					id: 2,
					text: 'Churn Reactivation',
					img: '/lottie/index/head/controller-tap-2.jpg',
					value: '6K'
				},
				{
					id: 3,
					text: 'Abandoned Cart',
					img: '/lottie/index/head/controller-tap-3.jpg',
					value: '2K'
				},
			],
			expositionList: [
				{
					id: 1,
					link: '/lottie/index/head/one.json',
				},
				{
					id: 2,
					link: '/lottie/index/head/two.json',
				},
				{
					id: 3,
					link: '/lottie/index/head/three.json',
				},
			]
		}
	},

	methods: {
		complete() {
			this.nextSlide();
			this.animChange();
			this.scrollControllItem();
		},

		controllerChange(index) {
			this.expositionSelect = index;
			this.animChange();
			this.scrollControllItem();
		},

		scrollControllItem() {
			const container = this.$refs.controller;
			const activeIndex = this.expositionSelect;
			const activeItem = this.$refs.controllerItems[activeIndex - 1]
			const posLeft = activeItem.getBoundingClientRect().left
			const padding = Number.parseInt(window.getComputedStyle(document.querySelector('.container')).paddingRight)

			container.scrollBy({
				left: posLeft - padding,
				behavior: 'smooth',
			});
		},

		animChange() {
			this.$refs.lottie.forEach((el, index) => {
				el.stop();
				if ((index + 1) === this.expositionSelect) el.play();
			})
		},

		nextSlide() {
			if (this.expositionSelect < Object.keys(this.expositionList).length) {
				this.expositionSelect = this.expositionSelect + 1;
			} else {
				this.expositionSelect = 1;
			}
		},
	},
}
</script>

<style lang="scss" scoped>
// styles in scss files //
</style>
