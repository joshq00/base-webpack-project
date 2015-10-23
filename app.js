import express from 'express';
import compression from 'compression';

const app = new express();
app
	.use( compression() )
	.use( '/', express.static( 'public' ) )
	.use( '/', express.static( 'build' ) )
	.use( '/', express.static( '.' ) )
	;

export default app;
