# Progressive Web Application Starter Pack

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)



In this Pack, you wil find a total pack that will hold every needed feature that a PWA application truly need and it will contain the following : 

 1. Firebase Service Worker file.
 2. Basic Offline-based functionalities that wil be upgrded later on to sw-precache.
 3. Hosting over Heroku.
 4. and more ...

## Setup :

In order to get the dependecies make sure to do the following : 

```terminal
# npm install
```

This command will download and install all needed dependecies.

## Web Notification Configuration : 

1. Head to [Firebase Console](https://console.firebase.google.com) and create new application.
2. Pick or Create a new Firebase Application.
3. Go to overview > Project Settings > Cloud Messeging and copy the Server Key (The long one)
3. Now go to the **api.js** file and do the following :

 ```js
      const fcm = new FCM('<put app_secret here>');
 ```

By now the project is fully configured and everything is set to launch.

## Offline Based Application

This demo incorporate Offline based experiences using firebase-messeging-sw file, you will find there that i've cached everything inside my **install** event there for our application will have the offline experience.

## Home Presence with Application Icon

In this application, your experience will extended to your own mobile device via having on-tap away application wih application icon + splash screen.

## Run the Application : 

In order to run the application go to your command line of choice and add the following commad :

```terminal
# npm start
```

[![forthebadge](http://forthebadge.com/badges/built-with-love.svg)](https://github.com/houssem-yahiaoui/)

