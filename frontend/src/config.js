// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDUDjs0HKsJo2wa-JKN42gU80bN8ZuLC4",
  authDomain: "capstoneproject-eric-s.firebaseapp.com",
  projectId: "capstoneproject-eric-s",
  storageBucket: "capstoneproject-eric-s.appspot.com",
  messagingSenderId: "1064158328370",
  appId: "1:1064158328370:web:d416e340670316623f6e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}