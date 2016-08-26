console.log('I\'m Service Worker');


// [*] Listening for our push notification event.
self.addEventListener('push', (event) => {
    console.log('Push message', event);
    // [*] Configuring our local push notifications.
    var title = 'Pushed';
    payload = event.data ? event.data.text() : '';
    event.waitUntil(
        self.registration.showNotification(title, {
            body: payload,
            icon: 'images/icon.jpg'
        }));
});
