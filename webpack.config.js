const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'SafetyNet',
		libraryTarget: 'commonjs2',
	},

	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			},

			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
};
