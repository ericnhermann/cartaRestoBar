// JavaScript source code
function displayEnvio() {
    
    document.getElementById("demo").innerHTML = "Se ha enviado su solicitud correctamente, le enviaremos una confirmación de su reserva mediante e-mail.";
}
(function(){
    (document).on('keyup','#foo',function(){
      var val = $(this).val().trim(),
          reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( reg.test(val) == false ){
        console.log('NO es un mail');
      }
      
      else{
        console.log('SI es un mail');
      }
    });
  });

function mostrarInfoConCheckeo(){

    var email = document.getElementById("mailreserva").value;
    var nombreReserva = document.getElementById("nombrereserva").value;

    if(email == "" || nombreReserva == ""){
        document.getElementById("demo").innerHTML = "El formulario debe completarse entero";
    } else {
        document.getElementById("demo").innerHTML = "Se ha enviado su solicitud correctamente, le enviaremos una confirmación de su reserva mediante e-mail.";
    }
}