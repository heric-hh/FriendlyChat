/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyASjIx17HmRvIAvlLYgttjuHn6NuVbGZBA",
  authDomain: "friendlychat-4a79e.firebaseapp.com",
  projectId: "friendlychat-4a79e",
  storageBucket: "friendlychat-4a79e.appspot.com",
  messagingSenderId: "895805113089",
  appId: "1:895805113089:web:787eda7c3067e26aa31100"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}