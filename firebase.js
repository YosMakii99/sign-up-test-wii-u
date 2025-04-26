// Firebase core
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMxF3fi7j_1q4tMuVVlmTNnpArpZksp-0",
  authDomain: "miiverse-project-b3a54.firebaseapp.com",
  projectId: "miiverse-project-b3a54",
  storageBucket: "miiverse-project-b3a54.appspot.com",
  messagingSenderId: "102965445650",
  appId: "1:102965445650:web:7791ab0511ce0fc2ab84cb",
  measurementId: "G-8P4GJEHXF8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);