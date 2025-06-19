// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Replace this config with your own from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBGBQYY6_X2_-9ouQjn-ugokKm4bnlJpHc",
  authDomain: "skillshareauth-5809d.firebaseapp.com",
  projectId: "skillshareauth-5809d",
  storageBucket: "skillshareauth-5809d.firebasestorage.app",
  messagingSenderId: "1032063900366",
  appId: "1:1032063900366:web:1cc3993d6fb30158104e9f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
