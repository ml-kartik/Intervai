import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervai-7107.firebaseapp.com",
  projectId: "intervai-7107",
  storageBucket: "intervai-7107.firebasestorage.app",
  messagingSenderId: "99443346758",
  appId: "1:99443346758:web:efed85f06a523a04286947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider =  new GoogleAuthProvider()

export {auth , provider}