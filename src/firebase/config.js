// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSDcP8cPnRUNGGecDsfziSUKowEyDELVE",
  authDomain: "back-fit-tracker.firebaseapp.com",
  projectId: "back-fit-tracker",
  storageBucket: "back-fit-tracker.appspot.com",
  messagingSenderId: "88363287447",
  appId: "1:88363287447:web:ec2d211804461214477ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)