// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNi20mICcgJOzhwhXrmWXznNXUuchccCs",
  authDomain: "elda-health-app.firebaseapp.com",
  projectId: "elda-health-app",
  storageBucket: "elda-health-app.appspot.com",
  messagingSenderId: "1007330816863",
  appId: "1:1007330816863:web:dd26c95f23ae6b809e7cea",
};

const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);
