console.log('I\'m Service Worker');


// [*] Listening for our push notification event.
self.addEventListener('push', (event) => {
    console.log('Push message', event);
    // [*] Configuring our local push notifications.
    var title = 'Pushed';
    event.waitUntil(
        self.registration.showNotification(title, {
            body: 'a message',
            icon: 'images/icon.jpg',
            tag: 'my-tag'
        }));
});