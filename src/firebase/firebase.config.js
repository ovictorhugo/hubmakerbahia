import * as firebase from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCzU3GBswkzTFAuXEzAR_--s-f0ienawTM",
    authDomain: "hub-maker-next-app.firebaseapp.com",
    projectId: "hub-maker-next-app",
    storageBucket: "hub-maker-next-app.appspot.com",
    messagingSenderId: "384505076139",
    appId: "1:384505076139:web:1091966db1ff1c24dfdaee",
    measurementId: "G-N4P82KPLRW"
  });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };

