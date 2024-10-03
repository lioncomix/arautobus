       // Obtener elementos del DOM
        const modal = document.getElementById("myModal");
        const btnEnviar = document.querySelector(".btn-primary");
        const spanClose = document.querySelector(".close");

        // Mostrar el modal al hacer clic en el botón de enviar
        btnEnviar.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el envío del formulario principal
            modal.style.display = "block";
        });

        // Cerrar el modal al hacer clic en la "X"
        spanClose.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Cerrar el modal al hacer clic fuera del contenido del modal
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });