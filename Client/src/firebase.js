// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6cb12.firebaseapp.com",
  projectId: "mern-auth-6cb12",
  storageBucket: "mern-auth-6cb12.appspot.com",
  messagingSenderId: "1008765454342",
  appId: "1:1008765454342:web:afbdea3bd4e494a1a7db87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
