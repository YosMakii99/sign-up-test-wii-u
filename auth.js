// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMxF3fi7j_1q4tMuVVlmTNnpArpZksp-0",
  authDomain: "miiverse-project-b3a54.firebaseapp.com",
  projectId: "miiverse-project-b3a54",
  storageBucket: "miiverse-project-b3a54.appspot.com",
  messagingSenderId: "102965445650",
  appId: "1:102965445650:web:7791ab0511ce0fc2ab84cb",
  measurementId: "G-8P4GJEHXF8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Captura el botón
const loginButton = document.getElementById("login");

// Acción al presionar el botón
loginButton.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.textContent = "¡Inicio de sesión exitoso!";
      message.style.color = "green";
      // Redirige al success.html
      setTimeout(() => {
        window.location.href = "success.html";
      }, 1500); // Espera 1.5 segundos para mostrar el mensaje
    })
    .catch((error) => {
      message.textContent = "Error: " + error.message;
      message.style.color = "red";
    });
});