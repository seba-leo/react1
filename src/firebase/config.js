// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBryvaKSLvJi3OaEFiBxgmtzxyikgE3j98",
  authDomain: "proyecto-coder-30eb1.firebaseapp.com",
  projectId: "proyecto-coder-30eb1",
  storageBucket: "proyecto-coder-30eb1.appspot.com",
  messagingSenderId: "697629434923",
  appId: "1:697629434923:web:be61812051057e3eb5f66e",
  measurementId: "G-X6W4MJBGMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()