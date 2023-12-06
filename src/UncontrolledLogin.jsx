import React from "react";

function UncontrolledLogin({ onLogin }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Acceder a los valores utilizando la API del DOM, coincidirán con los valores del atributo name de los inputs del formulario.
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        // Llamar a la función de manejo del inicio de sesión, onLogin, que espera username, password y remember.
        onLogin({ username, password, remember });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
                <input type="text" name="username" />
            </label>

            <label>
                Password:
                <input type="password" name="password" />
            </label>

            <label>
                Remember me:
                <input type="checkbox" name="remember" />
            </label>

            <button type="submit">Login</button>
            {/* No se necesita el botón de Reset ya que estamos utilizando componentes no controlados */}
        </form>
    );
}

export default UncontrolledLogin;

// Respuesta a la pregunta del ejercicio: COMPARATIVA ENTRE UTILIZAR FORMDATA API (empleado en el componente FormDataLogin.jsx y el que está activo ahora mismo en App.jsx) Y ACCEDER A LOS VALORES UTILIZANDO event.target.elements (empleado en el componente UncontrolledLogin.jsx y el que estaba activo en el ejercicio anterior. En App.jsx este último se encuentra comentado):

// Ambos códigos cumplen la misma función, pero el primero utiliza la API de FormData y el segundo accede a los valores a través de event.target.elements. La elección entre ambos depende de las necesidades específicas del proyecto. FormData es más conciso y puede ser útil cuando tienes muchos campos en el formulario, especialmente si incluye campos de archivos. Sin embargo, event.target.elements te proporciona un mayor control y visibilidad sobre cada elemento del formulario. Ambos enfoques tienen sus ventajas y desventajas, y la elección dependerá del contexto y los requisitos del formulario.
