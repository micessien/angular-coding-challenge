import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_APIKEY,
  authDomain: process.env.REACT_APP_FIRE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIRE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIRE_APPID,
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
