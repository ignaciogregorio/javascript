import { cart } from "./main.js";
import { total } from "./funciones.js";


for (const prod of cart) {

    let subtotal1 = prod.cantidad * prod.precio
    $("#detallePago").append(
        `<tr class="container"">
          <td><img src="${prod.imgNombre}" height="50px" alt="..."></td>
          <td class="cantidad${prod.sku}"> ${prod.cantidad}</td>
          <td>${prod.nombre}</td>
          <td class="subtotal${prod.sku}">$${subtotal1}</td>
        </tr>
        `
)
}
  $('#cuadroResumen').append(
    `Total de compra: $${total()}`
  )

$('.datosPersonales').hide()
$('.formaPago').hide()
$('.datosTranferencia').hide()
$('.pagoTarjeta').hide()

let correo = ""

// CLICK CONTINUAR, SE DESPLEGA FORMULARIO DE DATOS SOLO SI SE INTRODUCE MAIL//
$('#correo__continuar').click(()=>{
  if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
    alert('El correo electrónico introducido no es correcto.');
    return false;
}
  else{
    $('.datosPersonales').slideDown()
    correo = $("#correo").val()
  }

})


$('#errorNombre').hide()
$('#errorApellido').hide()
$('#errorDni').hide()
$('#errorDireccion').hide()
$('#errorCiudad').hide()

//CLICK EN SIGUIENTE, VALIDA CAMPOS LLENOS//

$('.siguiente').click(()=>{

  if($('#nombre').val() == ""){
    $('#errorNombre').slideDown()
  }else{
    $('#errorNombre').slideUp()
  }
  if($('#apellido').val() == ""){
    $('#errorApellido').slideDown()
  }else{
    $('#errorApellido').slideUp()
  }
  if($('#dni').val() == ""){
    $('#errorDni').slideDown()
  }else{
    $('#errorDni').slideUp()
  }
  if($('#direccion').val() == ""){
    $('#errorDireccion').slideDown()
  }else{
    $('#errorDireccion').slideUp()
  }
  if($('#ciudad').val() == ""){
    $('#errorCiudad').slideDown()
  }else{
    $('#errorCiudad').slideUp()
  }

if(($('#nombre').val() != "") && ($('#apellido').val() != "") && ($('#dni').val() != "") && ($('#direccion').val() != "") && ($('#ciudad').val() != "") ){
     $('.datosPersonales').slideUp()
     $('.formaPago').slideDown()

}

})


$('#tranferencia').click(()=>{
  $('.datosTranferencia').slideDown()
  $('.pagoTarjeta').hide()
  $('.tranferenciaOk').click(()=>{
    $('#resumenCompra').empty()
    $('#resumenCompra').append(
      `<h1>GRACIAS POR COMPRAR EN RAGNAR STORE</h1>
      <p><strong>Ahora el pedido se encuentra en proceso de validación.</strong></p>
      <p>Te informamos que la validación de los pedidos puede tardar hasta 24hs en realizarse.</p>
      <p>Una vez confirmado el pago, te enviaremos un mail a ${correo}</p>
      <a class="btn btn-dark" id="home" href="index.html">Volver a la Tienda</a>
      `
    )
    localStorage.clear()
    cart = []
  })
})

$('#tarjetaCredito').click(()=>{
  $('.datosTranferencia').hide()
  $('.pagoTarjeta').slideDown()

})
$('#errorNroTarjeta').hide()
$('#errorCvv').hide()
$('#errorNombreTarjeta').hide()
$('#errorVencimiento').hide()

$('#tarjetaOk').click(()=>{

  if($('#nroTarjeta').val() == ""){
    $('#errorNroTarjeta').slideDown()
  }else{
    $('#errorNroTarjeta').slideUp()
  }
  if($('#cvv').val() == ""){
    $('#errorCvv').slideDown()
  }else{
    $('#errorCvv').slideUp()
  }
  if($('#nombreTarjeta').val() == ""){
    $('#errorNombreTarjeta').slideDown()
  }else{
    $('#errorNombreTarjeta').slideUp()
  }
  if($('#vencimiento').val() == ""){
    $('#errorVencimiento').slideDown()
  }else{
    $('#errorVencimiento').slideUp()
  }

  if(($('#nroTarjeta').val() != "") && ($('#cvv').val() != "") && ($('#nombreTarjeta').val() != "") &&  ($('#vencimiento').val() != "")){

    $('#resumenCompra').empty()
    $('#resumenCompra').append(
      `<h1>GRACIAS POR COMPRAR EN RAGNAR STORE</h1>
      <p><strong>Ahora el pedido se encuentra en proceso de validación.</strong></p>
      <p>Te informamos que la validación de los pedidos puede tardar hasta 24hs en realizarse.</p>
      <p>Una vez confirmado el pago, te enviaremos un mail a ${correo}</p>
      <a class="btn btn-dark" id="home" href="index.html">Volver a la Tienda</a>
      `
    )
    localStorage.clear()
        cart = []

  }


})




