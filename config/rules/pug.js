module.exports = {
	test: /\.pug$/i,
	oneOf: [
		{
			resourceQuery: /^\?vue/,
			use: [
				{
					loader: 'pug-bem-plain-loader',
					options: {
						b: true,
					},
				},
			],
		},
		{
			use: [
				{
					loader: 'underscore-template-loader',
				},
				{
					loader: 'replace-string-loader',
					options: {
						search: /~(@\/+.*?)\.+(png|svg|jpg|jpeg|gif|webp|avif)/g,
						replace: (match, b1, b2) => `\${require('${b1}.${b2}')}`,
					},
				},
				{
					loader: 'pug-bem-plain-loader',
					options: {
						b: true,
					},
				},
			],
		},
	],
};
