// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHk1JV2Lxm1REFA8f99gW-hjFNfjcTUuk",
  authDomain: "student-attendance-ars.firebaseapp.com",
  projectId: "student-attendance-ars",
  storageBucket: "student-attendance-ars.appspot.com",
  messagingSenderId: "533724403611",
  appId: "1:533724403611:web:c997da53d6e58f63fbf33e",
  measurementId: "G-G1NEJ43GFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db}
