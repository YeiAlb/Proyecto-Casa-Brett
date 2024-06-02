
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const loginFormContainer = document.getElementById("login-form-container");
  const mainContent = document.getElementById("main-content");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Logica de Inicio de Sesión
    if (email === 'yeimeralberto.mr@gmail.com' && password === 'CAC123') {
      sessionStorage.setItem('isLoggedIn', 'true');
      checkLogin();
    } else {
      alert('Correo o contraseña incorrectos.');
    }

    // Guardar el estado de inicio de sesión en sessionStorage
    sessionStorage.setItem("loggedIn", "true");

    // Ocultar el formulario de inicio de sesión y mostrar el contenido principal
    loginFormContainer.style.display = "none";
    mainContent.style.display = "block";
  });

  function checkLogin() {
    const loggedIn = sessionStorage.getItem("loggedIn");

    if (loggedIn === "true") {
      // El usuario está logueado, muestra el contenido principal
      loginFormContainer.style.display = "none";
      mainContent.style.display = "block";
    } else {
      // El usuario no está logueado, muestra el formulario de inicio de sesión
      loginFormContainer.style.display = "flex";
      mainContent.style.display = "none";
    }
  }

  // Llamar a checkLogin() cuando se carga la página
  checkLogin();
});

document.getElementById('recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const query = document.getElementById('query').value;
    const appId = '76f2f701';  // Application ID
    const appKey = '4fd13da430e599fdc435790e3e1855b4'; // Application Keys
  
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
      .then(response => response.json())
      .then(data => {
        const recipes = data.hits;
        let html = '';
  
        recipes.forEach(hit => {
          const recipe = hit.recipe;
          html += `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.label}">
                <div class="card-body">
                  <h5 class="card-title">${recipe.label}</h5>
                  <p class="card-text">Calorías: ${Math.round(recipe.calories)}</p>
                  <a href="${recipe.url}" class="btn btn-primary" target="_blank">Ver receta</a>
                </div>
              </div>
            </div>
          `;
        });
  
        document.getElementById('recipes').innerHTML = html;
      })
      .catch(error => console.error('Error fetching recipes:', error));
  });

const app= document.getElementById('typewriter');

    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 75
    });

typewriter
 .typeString('Nuestra Señora del Buen Ayre')
 .pauseFor(200)
 .start();

 function enviarMensaje() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  // Aquí puedes agregar la lógica para enviar el mensaje (ejemplo)
  alert(`Mensaje enviado por ${nombre} (${correo}): ${mensaje}`);
}