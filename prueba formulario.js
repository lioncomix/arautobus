// Obtener elementos del DOM
var modal = document.getElementById("paymentModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Abrir el Modal al hacer clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el Modal al hacer clic en la 'x'
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el Modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// JavaScript Document