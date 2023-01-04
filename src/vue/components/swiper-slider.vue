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
	:space-between="20"
	ref="swiperItem"
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
	name: 'swiper-slider',
	components: {
		Swiper,
		SwiperSlide,
	},
};
</script>

<style lang="scss" scoped>
.swiper {
	height: 540px;
	width: 800px;
	overflow: visible;
}

._visible {
	.swiper-slide:nth-child(1).swiper-slide-active {
		.card__image {
			& > *:nth-child(2) {
				width: 176px;
				transform: translate(208px, -103px);
			}

			& > *:nth-child(3) {
				width: 160px;
				transform: translate(276px, -188px);
			}
		}
	}
	.swiper-slide:nth-child(2).swiper-slide-active {
		.card__image {
			& > *:nth-child(2) {
				width: 176px;
				transform: translate(208px, -103px);
			}

			& > *:nth-child(3) {
				width: 160px;
				transform: translate(276px, -188px);
			}
		}
	}
}

.swiper-slide {
	height: 540px;
	width: 650px;
	background: #F1F1F1;
	border-radius: 16px;
	overflow: hidden;

	img {
		max-width: 100%;
		display: block;
	}
}

.card {
	height: 100%;

	&__inner {
		display: flex;
		height: 100%;
		justify-content: space-between;
	}

	&__image {
		position: relative;
		width: 50%;
		height: auto;
		transition: all 1s;
	}

	&__wrapper {
		margin: 40px 0 0 0;
		width: 341px;
	}

	&__title {
		font-size: 34px;
		font-weight: 500;
		line-height: 44px;
		letter-spacing: 0;
		text-align: left;
		color: #333231;
		margin: 0 0 10px 0;
	}

	&__description {
		font-size: 20px;
		font-weight: 450;
		line-height: 26px;
		letter-spacing: 0;
		text-align: left;
		color: #333231;
	}

	&__img-static {
		position: absolute;
		bottom: 55px;
		right: 0;
		width: 335px;
		transform: translate(-15px, -15px);

		img {
			width: 341px;
		}
	}
}

.card[data-card-num="1"] {
	.card__image {
		z-index: 10;

		img {
			position: absolute;
			left: 0;
			bottom: 0;
			transition: all ease-in-out 1s;
		}

		& > *:nth-child(1) {
			width: 362px;
		}

		& > *:nth-child(2) {
			width: 176px;
			transform: translate(188px, -93px);
		}

		& > *:nth-child(3) {
			width: 160px;
			transform: translate(296px, -208px);
			transition: all 2s;
		}
	}
}

.card[data-card-num="2"] {
	.card__image {
		z-index: 10;

		img {
			position: absolute;
			left: 0;
			bottom: 0;
			transition: all 1s;
		}

		& > *:nth-child(1) {
			width: 362px;
		}

		& > *:nth-child(2) {
			width: 176px;
			transform: translate(188px, -93px);
		}

		& > *:nth-child(3) {
			width: 160px;
			transform: translate(296px, -208px);
		}
	}
}
</style>
