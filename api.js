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
        // [*] TODO: Adding our user notification registration token to our list typically hide it in a secret place. like a DB
        //           or some secure server because this information is critical to you users.
    });

    socket.on('pushme', (data) => {
      var serverKey = '';
      var fcm = new FCM('<FCM Server Key>');
        var message = {
            to: data.endpoint, // required fill with device token or topics
            notification: {
                title: data.payload.title,
                body: data.payload.body
            }
        };

        fcm.send(message)
            .then(function(response) {
                //TODO : Implement success mechanism
            })
            .catch(function(err) {
                //TODO : implement error handling mechanism
            })
    });

});


module.exports = app
