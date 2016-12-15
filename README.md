# Progressive Web Application Walkthrough

This is a simple PWA application built/concieved using the latest changes and rocommendations, especially the Firebase Cloud Messeging System or FCM

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
**Happy Coding :)**

Peace !

