document.getElementById('formulario-boletos').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Abrir una nueva ventana con el código HTML de la selección de asientos
    var ventanaAsientos = window.open("", "_blank", "width=600,height=800");

    ventanaAsientos.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Selección de Asientos</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 20px;
                }

                .bus {
                    display: inline-block;
                    margin-top: 20px;
                }

                .row {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 5px;
                }

                .seat {
                    width: 40px;
                    height: 40px;
                    background-color: lightgray;
                    margin: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border-radius: 5px;
                }

                .available {
                    background-color: #28a745;
                }

                .selected {
                    background-color: #ffc107;
                }

                .occupied {
                    background-color: #dc3545;
                    cursor: not-allowed;
                }
            </style>
        </head>
        <body>

            <h1>Selecciona tu asiento</h1>

            <div class="bus">
                <div class="row">
                    <div class="seat available" id="seat-1">1</div>
                    <div class="seat available" id="seat-2">2</div>
                    <div class="seat available" id="seat-3">3</div>
                    <div class="seat available" id="seat-4">4</div>
                    <div class="seat available" id="seat-5">5</div>
                    <div class="seat available" id="seat-6">6</div>
                    <div class="seat available" id="seat-7">7</div>
                    <div class="seat available" id="seat-8">8</div>
                </div>

                <div class="row">
                    <div class="seat available" id="seat-9">9</div>
                    <div class="seat available" id="seat-10">10</div>
                    <div class="seat available" id="seat-11">11</div>
                    <div class="seat available" id="seat-12">12</div>
                    <div class="seat available" id="seat-13">13</div>
                    <div class="seat available" id="seat-14">14</div>
                    <div class="seat available" id="seat-15">15</div>
                    <div class="seat available" id="seat-16">16</div>
                </div>

                <div class="row">
                    <div class="seat available" id="seat-17">17</div>
                    <div class="seat available" id="seat-18">18</div>
                    <div class="seat available" id="seat-19">19</div>
                    <div class="seat available" id="seat-20">20</div>
                    <div class="seat available" id="seat-21">21</div>
                    <div class="seat available" id="seat-22">22</div>
                    <div class="seat available" id="seat-23">23</div>
                    <div class="seat available" id="seat-24">24</div>
                </div>

                <div class="row">
                    <div class="seat available" id="seat-25">25</div>
                    <div class="seat available" id="seat-26">26</div>
                    <div class="seat available" id="seat-27">27</div>
                    <div class="seat available" id="seat-28">28</div>
                    <div class="seat available" id="seat-29">29</div>
                    <div class="seat available" id="seat-30">30</div>
                    <div class="seat available" id="seat-31">31</div>
                    <div class="seat available" id="seat-32">32</div>
                </div>
            </div>

            <p id="selected-seat">Asiento seleccionado: Ninguno</p>

            <!-- Botón de enviar -->
            <button onclick="enviarAsiento()">Enviar</button>

            <script>
                document.querySelectorAll('.seat.available').forEach(seat => {
                    seat.addEventListener('click', function() {
                        // Desmarcar cualquier asiento seleccionado previamente
                        document.querySelectorAll('.seat.selected').forEach(s => s.classList.remove('selected'));

                        // Marcar el asiento actual como seleccionado
                        this.classList.add('selected');

                        // Mostrar el asiento seleccionado
                        const seatNumber = this.textContent;
                        document.getElementById('selected-seat').textContent = 'Asiento seleccionado: ' + seatNumber;
                    });
                });

                function enviarAsiento() {
                    const selectedSeat = document.querySelector('.seat.selected');
                    if (selectedSeat) {
                        const seatNumber = selectedSeat.textContent;
                        alert('Has seleccionado el asiento número ' + seatNumber);
                    } else {
                        alert('Por favor selecciona un asiento antes de continuar.');
                    }
                }
            </script>

        </body>
        </html>
    `);

});
// JavaScript Document