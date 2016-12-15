'use strict';

const express = require('express');
const app = express();
const FCM = require('fcm-push');

app.io = require('socket.io')();

// [*] Configuring our static files.
app.use(express.static('public/'));

// [*] Configuring Routes.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// [*] Configuring our Socket Connection.
app.io.on('connection', socket => {
    console.log('Huston ! we have a new connection ...');
    socket.on('new_user', (endpoint) => {
        console.log(endpoint);
        // [*] Adding our user notification registration token to our list typically hided in a secret place.
    });

    socket.on('pushme', (data) => {
      var serverKey = '';
      var fcm = new FCM('AAAAg7MvJww:APA91bGRjxcK3l2lxpjZUOjgzONpNtUU_-4pKY1xxvhLnnYQ-c9PljJoDun5JBVEw4xI0iUEDfd64w1C6juHJe13SFxsBIHr0P-AW1pYms3ymqd2dcMgf8QAnhWnpoGKXxBwK5zyZe4B6WkxV1mmKxf3njP3lIgOeQ');
        var message = {
            to: data.endpoint, // required fill with device token or topics
            notification: {
                title: data.payload.title,
                body: data.payload.body
            }
        };

        fcm.send(message)
            .then(function(response) {
                console.log("Successfully sent with response: ", response);
            })
            .catch(function(err) {
                console.log("Something has gone wrong!");
                console.error(err);
            })
    });

});


module.exports = app
