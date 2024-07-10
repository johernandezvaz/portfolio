// Cargar las variables de entorno
require('dotenv').config();

// Inicia EmailJS con tu User ID
(function(){
    emailjs.init(process.env.EMAILJS_USER_ID); // Reemplaza process.env.EMAILJS_USER_ID con tu variable de entorno
})();

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        
        // Recoge los datos del formulario
        const formData = new FormData(form);
        const data = {
            to_name: "Destinatario", // Puedes cambiar esto según tu configuración
            servicio: formData.get("servicio"),
            nombre: formData.get("nombre"),
            apellido: formData.get("apellido"),
            correo: formData.get("correo"),
            telefono: formData.get("telefono"),
            mensaje: formData.get("mensaje"),
            nombre_negocio: formData.get("nombre_negocio"),
            industria: formData.get("industria")
        };

        // Envía el formulario usando EmailJS
        emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, data)
            .then(function(response) {
                // Muestra un popup de confirmación
                alert("Información enviada correctamente");
                
                // Redirige después de 5 segundos
                setTimeout(function() {
                    window.location.href = "https://www.noubeau.com/";
                }, 5000);
            }, function(error) {
                console.error("Error:", error);
                alert("Ocurrió un error al enviar la información. Por favor, inténtelo nuevamente.");
            });
    });
});
