
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvLOxHhpN_LWcd05wWn54ocHtpFX2xgU0",
  authDomain: "studywithus-website-c2872.firebaseapp.com",
  projectId: "studywithus-website-c2872",
  storageBucket: "studywithus-website-c2872.appspot.com",
  messagingSenderId: "810936350827",
  appId: "1:810936350827:web:665deaceb554bfb95e992e",
  measurementId: "G-SDTV49RVG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
