import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmElYtJ6ReZ0qsh5r76zsSuyEQn7vq8uM",
  authDomain: "project-5-d585b.firebaseapp.com",
  databaseURL: "https://project-5-d585b-default-rtdb.firebaseio.com",
  projectId: "project-5-d585b",
  storageBucket: "project-5-d585b.firebasestorage.app",
  messagingSenderId: "193612953542",
  appId: "1:193612953542:web:73306f494e26fc086c64c7"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);