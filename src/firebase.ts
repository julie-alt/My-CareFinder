import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHpDqYhNoY010IlB0WPQO7J33RuiJuxh0",
  authDomain: "my-carefinder-project-5fce2.firebaseapp.com",
  databaseURL:
    "https://my-carefinder-project-5fce2-default-rtdb.firebaseio.com",
  projectId: "my-carefinder-project-5fce2",
  storageBucket: "my-carefinder-project-5fce2.appspot.com",
  messagingSenderId: "1011773149413",
  appId: "1:1011773149413:web:bac34b6157ba8d8731840c",
  measurementId: "G-Z5LT0YJMTH",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, storage, db, googleProvider };
