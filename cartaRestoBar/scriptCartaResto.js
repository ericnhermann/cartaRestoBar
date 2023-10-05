// JavaScript source code
function displayEnvio() {
    
    document.getElementById("demo").innerHTML = "Se ha enviado su solicitud correctamente, le enviaremos una confirmación de su reserva mediante e-mail.";
}


function mostrarInfoConCheckeo(){

    var email = document.getElementById("mailreserva").value;
    var nombreReserva = document.getElementById("nombrereserva").value;

    if(email == "" || nombreReserva == ""){
        document.getElementById("demo").innerHTML = "El formulario debe completarse entero";
    } else {
        document.getElementById("demo").innerHTML = "Se ha enviado su solicitud correctamente, le enviaremos una confirmación de su reserva mediante e-mail.";
    }
}