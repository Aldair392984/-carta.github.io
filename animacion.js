$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        // Iniciar el temporizador para la redirección
        setTimeout(function() {
            window.location.href = 'carta.html'; // Reemplaza con la ruta al archivo donde está la carta
        }, 8000); // 7000 ms = 7 segundos
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});