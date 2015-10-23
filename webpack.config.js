var path = require( 'path' );

module.exports = {
	entry: {
		'index': [
			'./src/index.js',
		],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'babel' ],
			}, {
				test: /\.(css|less)$/,
				loaders: [ 'style', 'css', 'less' ],
			},
		],
	},
	output: {
		path: path.join( __dirname, 'build', 'js' ),
		publicPath: '/js/',
		filename: '[name].js',
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	node: {
		buffer: false,
	},
	resolve: {
		extensions: [
			'',
			'.web.js',
			'.js',
			'.web.jsx',
			'.jsx',
		],
	},
};
