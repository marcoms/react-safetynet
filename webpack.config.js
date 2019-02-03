const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			},
		],
	},
};
