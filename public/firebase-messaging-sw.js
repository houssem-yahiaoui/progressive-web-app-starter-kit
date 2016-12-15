//[*] Importing Firebase Needed Dependecies
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// [*] Firebase Configurations
var config = {
    apiKey: "AIzaSyBHQIhiJ4g8QzTOpT5Iq3zDAvtj04xgfmM",
    authDomain: "fcm-gdg-tlemcen.firebaseapp.com",
    databaseURL: "https://fcm-gdg-tlemcen.firebaseio.com",
    storageBucket: "fcm-gdg-tlemcen.appspot.com",
    messagingSenderId: "565646927628"
};

//[*] Initializing our Firebase Application.
firebase.initializeApp(config);

// [*] Initislaizing the Firebase Messaging Object.
const messaging = firebase.messaging();

// [*] SW Install State Event.
self.addEventListener('install', function(event) {
  console.log("Install Step, let's cache some files =D");
  //[*] Let's cache a bit !
  event.waitUntil(
       caches.open('pwa').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js'
            ]).then(() => self.skipWaiting());
        })
    );
});

// [*] SW Activate State Event.
self.addEventListener('activate', function(event) {
	console.log('Activated!', event);
});

// [*] SW Fetch Event.
self.addEventListener('fetch', function(event) {
	console.log('Let\'s get some Data');
	console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// [*] Special object let us handle our Background Push Notifications
messaging.setBackgroundMessageHandler(function(payload) {
    console.log();

    const notificationOptions = {
        body: payload.data.msg,
        icon: "images/icon.jpg",
        actions: [{
            action: 'like',
            title: 'Like',
            icon: 'images/like.png'
        }, {
            action: 'dislike',
            title: 'Dislike',
            icon: 'images/dislike.png'
        }]
    }
    self.addEventListener('notificationclick', function(event) {
        var messageId = event.notification.data;

        event.notification.close();

        if (event.action === 'like') {
          console.log("Goin to like something !");
        } else if (event.action === 'dislike') {
          console.log("Goin to dislike something !");
        } else {
          console.log("wh00t !");
        }
    }, false);
    return self.registration.showNotification(payload.data.title,
        notificationOptions);
});
