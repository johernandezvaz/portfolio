// Inicia EmailJS con tu User ID
(function(){
    emailjs.init("OymTMs4wyLL2auEw7"); // Reemplaza YOUR_USER_ID con tu User ID de EmailJS
})();

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        const name = document.getElementById("name").value;
        const email = document.getElementById("Email").value;
        const phone = document.getElementById("Phone").value;
        const message = document.getElementById("field").value;

        // Recoge los datos del formulario
        const data = {
            to_name: "José",
            from_name: name,
            nombre: name,
            correo: email,
            telefono: phone,
            mensaje: message
        };

        // Envía el formulario usando EmailJS
        emailjs.send("service_xb5qah1", "template_qvobun8", data)
            .then(function(response) {
                // Muestra el mensaje de éxito
                document.querySelector(".w-form-done").style.display = "block";
                document.querySelector(".w-form-fail").style.display = "none";

                // Redirige después de 5 segundos
                setTimeout(function() {
                    window.location.href = "https://www.noubeau.com/";
                }, 5000);
            }, function(error) {
                console.error("Error:", error);
                // Muestra el mensaje de error
                document.querySelector(".w-form-fail").style.display = "block";
                document.querySelector(".w-form-done").style.display = "none";
            });
    });
});
