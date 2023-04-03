// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpkRp1VmIelXYrGVLi-F8hO9L3FDuxMg",
  authDomain: "socialchat-20aec.firebaseapp.com",
  projectId: "socialchat-20aec",
  storageBucket: "socialchat-20aec.appspot.com",
  messagingSenderId: "964418414309",
  appId: "1:964418414309:web:ce67d6fd1c4dac90ddd60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)