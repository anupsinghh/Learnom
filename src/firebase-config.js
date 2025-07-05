// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration (Learnomics Project)
const firebaseConfig = {
  apiKey: "AIzaSyAHpfih-zBk82D89oukf1S2YwwB1Acqjb0",
  authDomain: "learnomics-caf93.firebaseapp.com",
  projectId: "learnomics-caf93",
  storageBucket: "learnomics-caf93.appspot.com", // ✅ corrected to valid format
  messagingSenderId: "180286450596",
  appId: "1:180286450596:web:77eedf637967ee8a5c2f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export for use in your LoginPage.js
export { auth, provider };
