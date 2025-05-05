// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkiQnRPF5JObDWdNWBKlrhDFvnVHfhSLY",
  authDomain: "festscopbd.firebaseapp.com",
  projectId: "festscopbd",
  storageBucket: "festscopbd.firebasestorage.app",
  messagingSenderId: "954916612237",
  appId: "1:954916612237:web:d532386dea292db6549ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;