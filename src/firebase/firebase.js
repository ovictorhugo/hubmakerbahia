// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzU3GBswkzTFAuXEzAR_--s-f0ienawTM",
  authDomain: "hub-maker-next-app.firebaseapp.com",
  projectId: "hub-maker-next-app",
  storageBucket: "hub-maker-next-app.appspot.com",
  messagingSenderId: "384505076139",
  appId: "1:384505076139:web:1091966db1ff1c24dfdaee",
  measurementId: "G-N4P82KPLRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
