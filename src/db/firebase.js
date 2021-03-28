// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp6yK7oBHwgwjEOrWQoAcKESjjilbB2Nc",
  authDomain: "community-connect-80380.firebaseapp.com",
  projectId: "community-connect-80380",
  storageBucket: "community-connect-80380.appspot.com",
  messagingSenderId: "680346589142",
  appId: "1:680346589142:web:2c50953f175a268da57677",
  measurementId: "G-LRV2VDLPZP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;