// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYcMD9cSY5X6rFNZBN788fM0RDh8tDjIc",
  authDomain: "formylove-b9835.firebaseapp.com",
  projectId: "formylove-b9835",
  storageBucket: "formylove-b9835.appspot.com",
  messagingSenderId: "416638657954",
  appId: "1:416638657954:web:c14f5a02969b87bad5befb",
  measurementId: "G-SB6M168YBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
