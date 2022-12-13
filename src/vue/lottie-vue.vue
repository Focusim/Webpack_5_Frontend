<template lang="pug">
div
	lottie-player(
		:src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
		:theme="options.theme"
		:player-size="options.playerSize"
		:player-controls="true"
		:autoplay="true"
		:loop="true"
		style="width: 100%; height:400px"
	)
	p lottie-vue init
	// https://assets2.lottiefiles.com/packages/lf20_hu2LUv.json || https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json
</template>

<script>
import LottieVuePlayer from"@lottiefiles/vue-lottie-player";

export default {
	name: 'lottie-vue',
	components: {
		vLottiePlayer: LottieVuePlayer
	},
	data() {
		return {
			options: {
				autoplay: true,
				minimizable: false,
				playerSize: "standard",
				backgroundColor: '#fff',
				backgroundStyle: 'color',
				theme: {
					controlsView: "standard",
					active: "light",
					light: {
						color: '#3D4852',
						backgroundColor: '#fff',
						opacity: '0.7',
					},
					dark: {
						color: '#fff',
						backgroundColor: '#202020',
						opacity: '0.7',
					}
				}
			}
		}
	}
}
</script>
