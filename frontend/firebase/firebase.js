// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyADgWWvqcaIXwQo5g8tNL3VHL0mizPsC5g",
  authDomain: "spotter-2a1c2.firebaseapp.com",
  projectId: "spotter-2a1c2",
  storageBucket: "spotter-2a1c2.appspot.com",
  messagingSenderId: "341076028562",
  appId: "1:341076028562:web:7633e4047e457a59004a4b",
  measurementId: "G-EHQH6JJGD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const provider = new GoogleAuthProvider();

export default {auth, provider}

