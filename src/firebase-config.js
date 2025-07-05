// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXLTyk1XF7eG9sQtkxKYuT8esuuamRgTQ",
  authDomain: "econtent-1d480.firebaseapp.com",
  projectId: "econtent-1d480",
  storageBucket: "econtent-1d480.appspot.com",
  messagingSenderId: "536289429121",
  appId: "1:536289429121:web:554c2785c845a0ac31ef80",
  measurementId: "G-PGMN7QS592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };
