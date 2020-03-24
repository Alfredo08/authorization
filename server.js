const express = require( 'express' );
const {AUTH_TOKEN, PORT} = require('./config');

const app = express();

function validateToken( req, res, next ){
    let token = req.headers.authorization;

    token = token.split(' ')[1];
    
    if( token !== AUTH_TOKEN){
        return res.status( 401 ).send( "Unauthorized. Please provide the token!" );
    }
    else{
        next()
    }
}

app.use( validateToken );

app.get( '/test', (req, res) => {

    return res.status(200).json({test: 'test'})
});

app.get( '/test2', ( req, res ) => {
    return res.status(200).json({test: 'test 2'})
});

app.listen( PORT, () => {
    console.log( "Server running in port 8080" );
});