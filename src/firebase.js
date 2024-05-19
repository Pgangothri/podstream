// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlRXHFD49KiDmwhW0tPbl0nUCdzivADMs",
  authDomain: "podstream-984fb.firebaseapp.com",
  projectId: "podstream-984fb",
  storageBucket: "podstream-984fb.appspot.com",
  messagingSenderId: "150120978398",
  appId: "1:150120978398:web:f226a2411b41bfb3be6f4f",
  measurementId: "G-SGFV9ZMCDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;