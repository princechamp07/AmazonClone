// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqy_FpeJpHNHEty-oOT-qe-wAMhl6Se5k",
  authDomain: "clone-fb7bc.firebaseapp.com",
  projectId: "clone-fb7bc",
  storageBucket: "clone-fb7bc.appspot.com",
  messagingSenderId: "688501208125",
  appId: "1:688501208125:web:eb9553e38f9a992a202654",
  measurementId: "G-B4751ENE5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default app;