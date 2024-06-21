// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzQabkO3TZmJSMJ23PRxaQr9Rxvs8qpxY",
  authDomain: "movie-lib-4f299.firebaseapp.com",
  projectId: "movie-lib-4f299",
  storageBucket: "movie-lib-4f299.appspot.com",
  messagingSenderId: "933285444126",
  appId: "1:933285444126:web:2b4ce5338a5ee006cf8c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app)