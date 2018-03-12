const path = require('path');

module.exports = {
  entry: './src/entry.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
		rules: [
			{
				test: /\.jsx$/, 
				exclude: /node_modules/, 
				loader: "babel-loader",
				options: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};