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
	:slides-per-view="1"
	:space-between="50"
)
	swiper-slide.swiper-slide
		lottie-player(
			class="swiper-slide__lottie"
			src="lottie/index/head/one.json"
			:player-controls="true"
			:speed="1"
			:autoplay="true"
			:loop="true"
			style="width: 100%; height:auto;"
		)
	swiper-slide
		lottie-player(
			src="lottie/index/head/two.json"
			:player-controls="true"
			:speed="1"
			:autoplay="true"
			:loop="true"
			style="width: 100%; height:auto;"
		)
	swiper-slide
		lottie-player(
			src="lottie/index/head/three.json"
			:player-controls="true"
			:speed="1"
			:autoplay="true"
			:loop="true"
			style="width: 100%; height:auto;"
		)



// для лотти можно задать бекграунд - :background-color= "`#F0F3F6`"
// для свайпера можно задать эффект - :effect="`flip`"


	// https://assets2.lottiefiles.com/packages/lf20_hu2LUv.json || https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json
	// https://new-cloud.intensa-dev.ru/Anim.json ||  ~@/img/Anim.json
</template>

<script>
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import SwiperCore, { Mousewheel, FreeMode, EffectFade } from 'swiper';
SwiperCore.use([Mousewheel, FreeMode, EffectFade]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/vue";


export default {
	name: 'lottie-vue',
	components: {
		vLottiePlayer: LottieVuePlayer,
		Swiper,
		SwiperSlide,
	},
	data() {
	}
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
}
.swiper-slide {
}
</style>
