import app from './app';

const APP_PORT = process.env.VCAP_APP_PORT || process.env.PORT || 3000;
app.listen( APP_PORT, () => {
	console.log( `App is now running on port ${ APP_PORT }` );
} );
