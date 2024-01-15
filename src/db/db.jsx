import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD2fWbpmsrGnLxosJmiKDm1Spf6UqbcyNY",
  authDomain: "e-monster-2024.firebaseapp.com",
  projectId: "e-monster-2024",
  storageBucket: "e-monster-2024.appspot.com",
  messagingSenderId: "1005369358102",
  appId: "1:1005369358102:web:c96c68e887d9cc57aec237"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db