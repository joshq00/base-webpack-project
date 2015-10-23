import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import config from './webpack.config';

var devconfig = Object.assign( {}, config, {
	entry: {
		'index': [
			'webpack-hot-middleware/client',
			'./src/index.js',
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	debug: true,
	devtool: 'cheap-module-eval-source-map',
} );

export var compiler = webpack( devconfig );
const devMiddleware = webpackDevMiddleware( compiler, {
	publicPath: devconfig.output.publicPath,
	stats: {
		colors: true,
	},
} );
export default devMiddleware;

