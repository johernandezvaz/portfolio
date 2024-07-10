


// Inicia EmailJS con tu User ID
(function(){
    emailjs.init("OymTMs4wyLL2auEw7"); // Reemplaza YOUR_USER_ID con tu User ID de EmailJS
})();

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        
        
        const servicio = document.getElementById("servicio").value;
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;
        const nombre_negocio = document.getElementById("nombre_negocio").value;
        const industria = document.getElementById("industria").value;

        // Recoge los datos del formulario
        console.log(servicio,nombre,apellido,correo,telefono,mensaje,nombre_negocio,industria);
        
        
        const data = {
            servicio: servicio,
            to_name: "José",
            from_name: nombre,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            mensaje: mensaje,
            nombre_negocio: nombre_negocio,
            industria: industria,
        };

        // Envía el formulario usando EmailJS
        emailjs.send("service_xb5qah1", "template_qvobun8", data)
            .then(function(response) {
                // Muestra un popup de confirmación
                alert("Información enviada correctamente");
                
                // Redirige después de 5 segundos
                setTimeout(function() {
                    window.location.href = "https://www.noubeau.com/";
                }, 1000);
            }, function(error) {
                console.error("Error:", error);
                alert("Ocurrió un error al enviar la información. Por favor, inténtelo nuevamente.");
            });
    });
});
