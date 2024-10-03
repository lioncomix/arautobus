// Script para pasar datos del formulario de búsqueda al formulario de confirmación
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del primer formulario

    // Obtener los valores ingresados en el formulario de búsqueda
    const destino = document.getElementById('destino').value;
    const fechaIda = document.getElementById('fecha-ida').value;
    const fechaVuelta = document.getElementById('fecha-vuelta').value;
    const pasajeros = document.getElementById('pasajeros').value;
    const tipoPasajero = document.getElementById('edad').value;

    // Rellenar el formulario de confirmación
    document.getElementById('destinoConfirmado').value = destino;
    document.getElementById('fechaIdaConfirmada').value = fechaIda;
    document.getElementById('fechaVueltaConfirmada').value = fechaVuelta;
    document.getElementById('pasajerosConfirmados').value = pasajeros;
    document.getElementById('tipoPasajeroConfirmado').value = tipoPasajero;

    // Mostrar el formulario de confirmación
    document.getElementById('formularioConfirmacion').style.display = 'block';
});
// JavaScript Document