Respuesta a la pregunta del ejercicio: COMPARATIVA ENTRE UTILIZAR FORMDATA API (empleado en el componente FormDataLogin.jsx y el que está activo ahora mismo en App.jsx) Y ACCEDER A LOS VALORES UTILIZANDO event.target.elements (empleado en el componente UncontrolledLogin.jsx y el que estaba activo en el ejercicio anterior. En App.jsx este último se encuentra comentado):

Ambos códigos cumplen la misma función, pero el primero utiliza la API de FormData y el segundo accede a los valores a través de event.target.elements. La elección entre ambos depende de las necesidades específicas del proyecto. FormData es más conciso y puede ser útil cuando tienes muchos campos en el formulario, especialmente si incluye campos de archivos. Sin embargo, event.target.elements te proporciona un mayor control y visibilidad sobre cada elemento del formulario. Ambos enfoques tienen sus ventajas y desventajas, y la elección dependerá del contexto y los requisitos del formulario.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
