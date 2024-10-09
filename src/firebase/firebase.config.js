// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.FIREBASE_CONFIG_APIKEY,
  authDomain:import.meta.env.FIREBASE_CONFIG_AUTHDOMAIN,
  projectId:import.meta.env.FIREBASE_CONFIG_PROJECTID,
  storageBucket:import.meta.env.FIREBASE_CONFIG_STORAGEBUCKET,
  messagingSenderId:import.meta.env.FIREBASE_CONFIG_MESSAGINGSENDERID,
  appId:import.meta.env.FIREBASE_CONFIG_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
