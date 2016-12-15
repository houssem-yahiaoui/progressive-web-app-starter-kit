 var config = {
     apiKey: "AIzaSyBHQIhiJ4g8QzTOpT5Iq3zDAvtj04xgfmM",
     authDomain: "fcm-gdg-tlemcen.firebaseapp.com",
     databaseURL: "https://fcm-gdg-tlemcen.firebaseio.com",
     storageBucket: "fcm-gdg-tlemcen.appspot.com",
     messagingSenderId: "565646927628"
 };
 firebase.initializeApp(config);

 const messaging = firebase.messaging();
 messaging.requestPermission()
     .then(function() {
         console.log("We have permission !");
         return messaging.getToken();
     })
     .then(function(token) {
         console.log(token);
         document.getElementById('endpoint').innerHTML = token
         socket.emit("new_user", token);
         document.getElementById('push').onclick = function() {
             title = document.getElementById('push_title');
             payload = document.getElementById('push_message');
             console.log("About to send :" + token, " + ", "payload:", payload.value);
             console.log('sending push');
             socket.emit('pushme', {
                 endpoint: token,
                 payload: {
                   title : title.value,
                   body : payload.value
                 }
             });
         }
     })
     .catch(function(err) {
         console.log("Huston we have a problem !", err);
     });

 messaging.onMessage(function(notif) {
     console.log(notif);
     var dialog = document.querySelector('dialog');
     if (!dialog.showModal) {
         dialogPolyfill.registerDialog(dialog);
     }
     document.getElementById('message').innerHTML = notif.notification.body;
     document.getElementById('title').innerHTML = notif.notification.title;
     dialog.showModal();
     dialog.querySelector('.close').addEventListener('click', function() {
         dialog.close();
     });
 });
