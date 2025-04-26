import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebase.js';
import { setDoc, doc } from "firebase/firestore";

// Registro
export async function registerUser(email, password, nnid) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Guardar NNID en Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: email,
    nnid: nnid,
  });

  return user;
}

// Login
export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}