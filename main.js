document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const contenidoPrivado = document.getElementById('contenido-privado');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que el formulario se envíe
  
      // Aquí deberías validar el inicio de sesión (por ejemplo, enviar los datos a un servidor)
  
      // Simulando inicio de sesión exitoso
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (email === 'tu@email.com' && password === 'tucontraseña') {
        // Ocultar botón de inicio de sesión
        loginButton.style.display = 'none';
        // Mostrar contenido privado
        contenidoPrivado.style.display = 'block';
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    });
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