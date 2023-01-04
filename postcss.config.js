module.exports = {
	plugins: process.env.NODE_ENV === 'production'
		? {
			'postcss-preset-env': {
				browsers: 'last 3 versions',
			},
			autoprefixer: {},
			cssnano: {
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			},
		// perfectionist: {
		// 	cascade: false,
		// 	indentSize: 2,
		// },
		} : {
			'postcss-px-to-viewport': {
				// options
				unitToConvert: 'px',
				viewportWidth: 1280,
				unitPrecision: 5,
				propList: ['*'],
				viewportUnit: 'vw',
				fontViewportUnit: 'vw',
				selectorBlackList: [],
				minPixelValue: 1,
				mediaQuery: false,
				replace: true,
				exclude: [],
				landscape: false,
				landscapeUnit: 'vw',
				landscapeWidth: 568
			},
			'postcss-preset-env': {
				browsers: 'last 3 versions',
			},
			autoprefixer: {},
		},
};
