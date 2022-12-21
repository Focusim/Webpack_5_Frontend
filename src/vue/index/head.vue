<template lang="pug">
swiper(
	:pagination="true"
	:mousewheel=`{
		sensitivity: 1,
		forceToAxis: true,
	}`
	:free-mode=`{
		enabled: true,
		momentum: true,
		momentumBounceRatio: 1,
		momentumRatio: 1,
		momentumVelocityRatio: 1,
	}`
	:slides-per-view="1"
	:space-between="0"
)
	swiper-slide(style="background: #F1F1F1;")
		.card(data-card-num="1")
			.card__inner
				.card__image
					img(src="~@/img/slider/return-customers/stand.png" alt="Return customers")
					img(src="~@/img/slider/return-customers/jacket.png" alt="Return customers")
					img(src="~@/img/slider/return-customers/btn.png" alt="Return customers")
				.card__wrapper
					.card__title Return customers
					.card__description back to the store when they leave items in a cart
					img.card__img-static(src="~@/img/slider/return-customers/static.png" alt="Return customers")
	swiper-slide(style="background: #ffffff;")
		.card(data-card-num="2")
			.card__inner
				.card__image
					img(src="~@/img/slider/return-customers/stand.png" alt="Return customers")
					img(src="~@/img/slider/return-customers/jacket.png" alt="Return customers")
					img(src="~@/img/slider/return-customers/btn.png" alt="Return customers")
				.card__wrapper
					.card__title Return customers
					.card__description back to the store when they leave items in a cart
					img.card__img-static(src="~@/img/slider/return-customers/static.png" alt="Return customers")

</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Pagination, Mousewheel, FreeMode } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
SwiperCore.use([Pagination, Mousewheel, FreeMode]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default {
	name: 'head',
	components: {
		Swiper,
		SwiperSlide,
	},
};
</script>

<style lang="scss" scoped>


</style>
