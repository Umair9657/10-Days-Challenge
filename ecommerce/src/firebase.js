// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmxJfT9OSJ9dR7BIGjf_J4tLPkvd1MO_E",
  authDomain: "ecommerce-90f78.firebaseapp.com",
  projectId: "ecommerce-90f78",
  storageBucket: "ecommerce-90f78.firebasestorage.app",
  messagingSenderId: "124150055304",
  appId: "1:124150055304:web:fde470c0dc559e1b59ba3d",
  measurementId: "G-3G5083PZE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);