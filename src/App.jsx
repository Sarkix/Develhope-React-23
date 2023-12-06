import React from "react";
// import Login from "./Login";
// import UncontrolledLogin from "./UncontrolledLogin";
import FormDataLogin from "./FormDataLogin";

function App() {
    // const handleLogin = (loginData) => {
    //     console.log("Login data:", loginData);
    // };

    // const handleLogin = (userData) => {
    //     // Lógica de manejo del inicio de sesión (puede imprimir los datos por ahora)
    //     console.log("Login data:", userData);
    // };

    const handleLogin = (loginData) => {
        console.log("Login data:", loginData);
    };

    return (
        <div>
            {/* <Login onLogin={handleLogin} /> */}
            {/* <UncontrolledLogin onLogin={handleLogin} /> */}
            <FormDataLogin onLogin={handleLogin} />
        </div>
    );
}

export default App;

// Respuesta a la pregunta del ejercicio: COMPARATIVA ENTRE UTILIZAR FORMDATA API (empleado en el componente FormDataLogin.jsx y el que está activo ahora mismo en App.jsx) Y ACCEDER A LOS VALORES UTILIZANDO event.target.elements (empleado en el componente UncontrolledLogin.jsx y el que estaba activo en el ejercicio anterior. En App.jsx este último se encuentra comentado):

// Ambos códigos cumplen la misma función, pero el primero utiliza la API de FormData y el segundo accede a los valores a través de event.target.elements. La elección entre ambos depende de las necesidades específicas del proyecto. FormData es más conciso y puede ser útil cuando tienes muchos campos en el formulario, especialmente si incluye campos de archivos. Sin embargo, event.target.elements te proporciona un mayor control y visibilidad sobre cada elemento del formulario. Ambos enfoques tienen sus ventajas y desventajas, y la elección dependerá del contexto y los requisitos del formulario.
