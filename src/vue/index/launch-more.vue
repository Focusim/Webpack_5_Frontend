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
	swiper(
		:pagination="true"
		:mousewheel=`{
		sensitivity: 1,
		forceToAxis: true,
		}`
		:free-mode=`{
		enabled: false,
		momentum: true,
		momentumBounceRatio: 1,
		momentumRatio: 1,
		momentumVelocityRatio: 1,
		}`
		@slideChange="onSlideChange"
		:slides-per-view="1"
		:space-between="30"
	)
		swiper-slide.swiper-slide(
			v-for="item in expositionList"
			:class="{'showing__item--active': (item.id === expositionSelect)}"
		)
			lottie-player(
				ref="lottie"
				:src="item.link"
				:speed="1"
				@complete="complete"
				@segmentStart="segmentStart"
				style="width: 100%; height:auto;"
			)
</template>

<script>
import LottieVuePlayer from"@lottiefiles/vue-lottie-player";
import SwiperCore, { Mousewheel, FreeMode, EffectFade } from 'swiper';
SwiperCore.use([Mousewheel, FreeMode, EffectFade]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide, useSwiper} from "swiper/vue";

export default {
	name: "launch-more",
	components: {
		vLottiePlayer: LottieVuePlayer,
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
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
	},

	methods: {
		complete() {
			console.log('complete')
		},

		segmentStart() {
			console.log('123')
		},

		controllerChange(index) {
			this.expositionSelect = index;
		},

		onSlideChange(swiper) {
			console.log('активный слайд:' + swiper.activeIndex)

			this.expositionSelect = swiper.activeIndex + 1

			this.animChange();
		},

		animChange() {
			this.$refs.lottie.forEach((el, index) => {
				el.stop();
				if ((index + 1) === this.expositionSelect) el.play();
			})
		},


	}
}
</script>

<style scoped lang="scss">
</style>
