// JavaScript source code
function displayEnvio() {
    
    document.getElementById("demo").innerHTML = "Se ha enviado su solicitud correctamente, le enviaremos una confirmación de su reserva mediante e-mail.";
}


function mostrarInfoConCheckeo() {
    var email = document.getElementById("mailreserva").value;
    var nombreReserva = document.getElementById("nombrereserva").value;

    // Expresión regular para validar el formato del correo electrónico
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email == "" || nombreReserva == "" || !regex.test(email)) {
        document.getElementById("demo").innerHTML = "El formulario debe completarse entero y el correo electrónico debe ser válido";
    } else {
        document.getElementById("demo").innerHTML = "Se ha enviado su solicitud correctamente, le enviaremos una confirmación de su reserva mediante e-mail.";
    }
}