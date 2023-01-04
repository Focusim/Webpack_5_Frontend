<template lang="pug">
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
	:slides-per-view="3"
	:space-between="100"
	ref="swiperItem"
)
	swiper-slide
		.card
			.card__inner
				p 123
	swiper-slide
		.card
			.card__inner
				p 123
	swiper-slide
		.card
			.card__inner
				p 123
	swiper-slide
		.card
			.card__inner
				p 123
	swiper-slide.swiper-slide--big
		.card
			.card__inner
				p 123
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Mousewheel, FreeMode } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
SwiperCore.use([ Mousewheel, FreeMode]);

// Import Swiper styles
import 'swiper/css';

export default {
	name: 'swiper-recall',
	components: {
		Swiper,
		SwiperSlide,
	},
};
</script>

<style lang="scss" scoped>
.swiper {
	width: 100%;
	overflow: visible;
}

.swiper-slide {
	width: 253px;
	background: darkred;
	height: 300px;
}

.swiper-slide--big {
	width: 400px !important;
	background: blue;
}
</style>
