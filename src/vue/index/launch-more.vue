<template lang="pug">
div.wrap
	lottie-player(
		id="test-l"
		src="lottie/index/launch-more/pers.json"
		:player-controls="true"
		:autoplay="true"
		:speed="1"
		mode="bounce"
		:loop="false"
		style="width: 100%; height:auto;"
	)
</template>

<script>
import LottieVuePlayer from"@lottiefiles/vue-lottie-player";

export default {
	name: "launch-more",
	components: {
		vLottiePlayer: LottieVuePlayer
	},
	data() {
		return {
		}
	},

	mounted() {
		var animWrapper = document.querySelector('.wrap')
		var animItem = document.querySelector('#test-l')
		var directionMenu = 1;

		animWrapper.addEventListener('mousemove', (e) => {
			animItem.setDirection(directionMenu);
			animItem.play();
			console.log('mouseenter')
		});

		animWrapper.addEventListener('mouseleave', (e) => {
			animItem.setDirection(-directionMenu);
			animItem.play();
			console.log('mouseleave')
		});

		console.log(3)
	}
}
</script>

<style scoped lang="scss">
.wrap {
	max-height: 620px;
	max-width: 650px;
}
@media (min-width: 1281px) {
	.wrap {
		max-height: 620px;
		max-width: 650px;
	}
}
</style>
