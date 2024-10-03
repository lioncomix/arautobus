document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el contenido principal y ocultar la pantalla de carga cuando se carga la página
    document.getElementById("loading-screen").style.visibility = "hidden";
    document.getElementById("content").style.display = "block";

    // Agregar el evento de clic a los enlaces que necesitan cargar
    const links = document.querySelectorAll(".load-link");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Mostrar la pantalla de carga
            document.getElementById("loading-screen").style.visibility = "visible";
            document.getElementById("content").style.display = "none";
        });
    });
});
// JavaScript Document