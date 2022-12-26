<template lang="pug">
.showing
	.container
		.controller
			.controller__item(
				v-for="item in controllerList"
				v-html="item.text"
				@click="controllerChange(item.id)"
				:class="{'controller__item--active': (item.id === expositionSelect)}"
			)
			.timer(:key="timer.out" style="min-width: 300px; min-height: 200px; background: white; position: fixed; left: 0; bottom: 0; z-index: 100000;") Кадры: {{ timer.op }} FPS: {{ timer.fps }} <br> Time: {{ timer.duration }}

		.showing__wrapper
			.showing__item(
				v-for="item in expositionList"
				:class="{'showing__item--active': (item.id === expositionSelect)}"
			)
				lottie-player(
					ref="lottie"
					v-cloak
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
import expendsOne from "../../static/lottie/index/head/one.json";
import expendsTwo from "../../static/lottie/index/head/two.json";
import expendsThree from "../../static/lottie/index/head/three.json";

export default {
	name: 'head',
	components: {
		vLottiePlayer: LottieVuePlayer,
	},
	data() {
		return {
			timer: {
				op: 0,
				fps: 0,
				duration: 0,
				flag: true,
			},
			expositionSelect: 1,
			controllerList: [
				{
					id: 1,
					text: 'text 1'
				},
				{
					id: 2,
					text: 'text 2'
				},
				{
					id: 3,
					text: 'text 3'
				},
			],
			expositionList: [
				{
					id: 1,
					link: '/lottie/index/head/one.json',
					json: expendsOne
				},
				{
					id: 2,
					link: '/lottie/index/head/two.json',
					json: expendsTwo
				},
				{
					id: 3,
					link: '/lottie/index/head/three.json',
					json: expendsThree
				},
			]
		}
	},

	mounted() {
	},

	beforeMount() {
		// this.timerRecalculation();
	},

	beforeCreate() {
		console.log('before')
	},

	watch: {
		// Note: only simple paths. Expressions are not supported.
		'expositionSelect'() {
			// ...
			this.timerRecalculation();
		}
	},

	methods: {
		complete() {
			this.nextSlide();
			this.playStopAnim();
			console.log('Animation complete. Button index:' + this.expositionSelect)
		},

		controllerChange(index) {
			this.expositionSelect = index;
			this.timerRecalculation(index);
			this.playStopAnim();

			console.log('Controller changed. Button index:' + this.expositionSelect)
		},

		timerRecalculation(index = this.expositionSelect) {
			// const obj = this.expositionList[index - 1].json;
			// this.timer.op = obj.op;
			// this.timer.fps = obj.fr;
			// this.timer.duration = this.timer.op / this.timer.fps;
			// this.startTimer();
		},

		startTimer() {
			// if (this.timer.flag === true) {
			// 	this.timer.flag = false;
			//
			// 	let timer = setInterval(() => {
			// 		if (this.timer.duration >= 0) {
			// 			this.timer.duration = this.timer.duration.toFixed(2) - 0.01;
			//
			// 		} else {
			// 			clear();
			// 			this.timer.flag = true;
			// 			this.nextSlide();
			// 		}
			// 	}, 10)
			//
			// 	function clear() {
			// 		clearInterval(timer);
			// 		console.log('clear')
			// 	}
			// }
		},

		playStopAnim(minus) {

			this.$refs.lottie.forEach((el, index) => {
				console.log('lottie index: ' + (index + 1), this.expositionSelect)

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

// op - кадры
// fr - кадров в секунду
</script>

<style lang="scss" scoped>
[v-cloak] {
	display: none;
}


.showing {

	&__wrapper {

	}

	&__item {

		&--active {
			min-height: 525px;
		}
	}
}

.controller {
	display: flex;
	justify-content: center;
	column-gap: 20px;

	&__item {
		width: 140px;
		height: 40px;
		background: #39AA5D;
		cursor: pointer;

		&--active {
			background: darkred;
		}
	}
}
</style>
