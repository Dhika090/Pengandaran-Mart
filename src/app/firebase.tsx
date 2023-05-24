// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYdPf8MfpeDlXl96JPTsDX3rRHXk5Efmc",
  authDomain: "pengandaran-mart.firebaseapp.com",
  projectId: "pengandaran-mart",
  storageBucket: "pengandaran-mart.appspot.com",
  messagingSenderId: "374458253079",
  appId: "1:374458253079:web:98cac3e4ae64f744fdc152",
  measurementId: "G-VQR2EPMF8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);