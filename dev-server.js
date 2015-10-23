import express from 'express';
import webpackHotMiddleware from 'webpack-hot-middleware';

import app from './app';
import { compiler } from './webpack-middleware';
import webpacker from './webpack-middleware';

const devapp = express();

devapp
	.use( webpacker )
	.use( webpackHotMiddleware( compiler ) )
	.use( app )
	;

const APP_PORT = process.env.VCAP_APP_PORT || process.env.PORT || 3000;
devapp.listen( APP_PORT, () => {
	console.log( `App is now running on port ${ APP_PORT }` );
} );
