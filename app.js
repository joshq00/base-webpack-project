import express from 'express';

const app = new express();
app
	.use( '/', express.static( 'public' ) )
	.use( '/', express.static( 'build' ) )
	.use( '/', express.static( '.' ) )
	;

export default app;
