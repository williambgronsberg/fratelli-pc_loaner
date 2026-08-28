import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDWwfpAs3seIe4ELuGZkAgrblowz6dKG5o",
  authDomain: "fratelli-db-29588.firebaseapp.com",
  projectId: "fratelli-db-29588",
  storageBucket: "fratelli-db-29588.firebasestorage.app",
  messagingSenderId: "673725534115",
  appId: "1:673725534115:web:2f3f22cda85e5aa0499416",
  measurementId: "G-V5ZVQ1XCJE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
