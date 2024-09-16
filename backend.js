document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        // Agregar evento de envío al formulario de registro para validar contraseñas
        registerForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validar si las contraseñas coinciden
            if (password !== confirmPassword) {
                event.preventDefault();
                alert("Las contraseñas no coinciden.");
            }
        });
    }

    // Obtener el formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Validación en el envío del formulario de inicio de sesión (puedes agregar más validaciones si es necesario)
        loginForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Aquí puedes agregar más validaciones si lo consideras necesario
        });
    }

    // Obtener el campo de búsqueda
    const searchInput = document.getElementById('search');
    if (searchInput) {
        // Crear un elemento para mostrar mensajes
        const searchMessage = document.createElement('p');
        searchMessage.style.color = 'red'; // Color del mensaje en rojo
        searchMessage.style.display = 'none'; // Ocultarlo inicialmente
        searchInput.parentNode.appendChild(searchMessage); // Añadir el mensaje al DOM

        // Agregar un evento de entrada al campo de búsqueda
        searchInput.addEventListener('input', function(e) {
            // Remover caracteres que no sean letras o números usando una expresión regular
            const invalidCharacters = /[^a-zA-Z0-9]/g;

            // Si se encuentran caracteres no permitidos
            if (invalidCharacters.test(searchInput.value)) {
                // Mostrar el mensaje al usuario
                searchMessage.textContent = 'Este campo solo acepta letras y números.';
                searchMessage.style.display = 'block'; // Mostrar mensaje

                // Remover los caracteres no permitidos
                searchInput.value = searchInput.value.replace(invalidCharacters, '');
            } else {
                // Ocultar el mensaje si la entrada es válida
                searchMessage.style.display = 'none';
            }
        });
    }
});
