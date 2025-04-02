// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDJaWXTmFRq5TOff-4ppA_2xbRIIqgH4U",
  authDomain: "str-client-portal.firebaseapp.com",
  projectId: "str-client-portal",
  storageBucket: "str-client-portal.firebasestorage.app",
  messagingSenderId: "326303222389",
  appId: "1:326303222389:web:8c3207491e99383f92c63c",
  measurementId: "G-2E4K4GYYJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);