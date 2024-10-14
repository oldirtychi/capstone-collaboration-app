// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
import config from "./firebaseConfig"

// Initialize Firebase
const app = initializeApp(config);

const auth = getAuth(app);

export {auth}