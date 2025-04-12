import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClzT50pQ67uKbcqnTjRahRxK1cReG_wpc",
  authDomain: "resumebuilder-327d9.firebaseapp.com",
  projectId: "resumebuilder-327d9",
  storageBucket: "resumebuilder-327d9.firebasestorage.app",
  messagingSenderId: "1050560720494",
  appId: "1:1050560720494:web:f3163af64b4606b444c07f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
