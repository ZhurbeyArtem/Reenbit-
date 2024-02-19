// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = import.meta.env.VITE_API_KEY_FIREBASE
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN_FIREBASE
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID_FIREBASE
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET_FIREBASE
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE
const APP_ID = import.meta.env.VITE_APP_ID_FIREBASE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider()