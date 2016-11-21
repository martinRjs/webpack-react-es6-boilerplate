'use strict';

var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders:[{
			test: /\.js$/,
			exclude:/node_modules/,
			include: [
      			path.resolve(__dirname, "/node_modules/"),
    		],
			loader: 'babel-loader',
			query: {
 				 'presets': ['es2015']
			}
		},{
			test: /\.jsx$/,
    	loader: 'babel',
    	exclude:/node_modules/,
			include: [__dirname + '/node_modules', __dirname + '/src/'],
		},{
			test: /\.scss$/,
    	loaders: ['style', 'css', 'sass'],
			include: [__dirname + '/src/themes'],
    	exclude:/node_modules/,
		}]
	}
}
