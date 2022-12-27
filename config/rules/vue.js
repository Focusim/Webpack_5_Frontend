module.exports = {
	test: /\.vue$/i,
	loader: 'vue-loader',
	options: {
		loader: {
			scss: 'vue-style-loader!css-loader!sass-loader',
		},
		cacheBusting: false, // true by default (:
		compilerOptions: {
			vLottiePlayer:  (tag) => tag === "lottie-player",
			v3LottiePlayer:  (tag) => tag === "vue3-lottie-player",
		},
	},
};
