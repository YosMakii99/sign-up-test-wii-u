<input type="text" id="nnid" placeholder="Nintendo Network ID" required></input>

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nnid = document.getElementById("nnid").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        // Guardar datos adicionales en Firestore
        const db = firebase.firestore();
        db.collection("users").doc(user.uid).set({
          email: email,
          nnid: nnid
        }).then(() => {
          console.log("Datos de usuario guardados correctamente");
          window.location.href = "page.html"; // Menú principal
        });
      })
      .catch((error) => {
        document.getElementById("error-message").innerText = error.message;
      });
  }
  <script src="https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore-compat.js"></script>

  // Opcional si cargas desde JSON
fetch('firebase-config.json')
.then(response => response.json())
.then(config => {
  firebase.initializeApp(config);
});


// Registro
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const username = document.getElementById('register-username').value;
  const miiImage = document.getElementById('register-mii').value || ''; // opcional

  try {
    await registerUser(email, password, username, miiImage);
    alert('¡Registro exitoso!');
    window.location.href = 'main_menu.html'; // Tu menú principal
  } catch (error) {
    alert('Error en registro: ' + error.message);
  }
});