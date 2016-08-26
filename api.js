'use strict';

const express = require('express');
const app = express();
const webPush = require('web-push');
const bodyParser = require('body-parser');

app.io = require('socket.io')();

// [*] Configuring Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// [*] Registring our GCM Token :
webPush.setGCMAPIKey('AIzaSyC25D6AD3DYax0YwSB_IpNpmzo8CgvkQtY');

const regTokens = [];

// [*] Configuring our static files.
app.use(express.static('public/'));

// [*] Configuring Routes.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// [*] Configuring our Socket Connection.
app.io.on('connection', socket => {
    console.log('we have a new connection ...');
    socket.on('new_user', (reg_id) => {
        console.log(reg_id);
        // [*] Adding our user notification registration token to our list typically hided in a secret place.
        if (regTokens.indexOf(reg_id) === -1) {
            regTokens.push(reg_id);
        }
    });

    socket.on('pushme', (data) => {
        console.log("data : ", data);
        console.log("endpoint: ", data.endpoint);
        console.log("public key: ", data.key);
        console.log("authkey: ", data.authSecret);
        console.log("payload: ", data.payload);

        webPush.sendNotification(data.endpoint, {
                payload: data.payload,
                userPublicKey: data.key,
                userAuth: data.authSecret,
            })
            .then(() => {
                res.sendStatus(201);
            });
    });

});


module.exports = app
