import { cart } from "./main.js";


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
$('.datosPersonales').hide()
$('.formaPago').hide()
$('.datosTranferencia').hide()

// CLICK CONTINUAR, SE DESPLEGA FORMULARIO DE DATOS SOLO SI SE INTRODUCE MAIL//
$('#correo__continuar').click(()=>{
  if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
    alert('El correo electrónico introducido no es correcto.');
    return false;
}
  else{
    $('.datosPersonales').slideDown()
  }

})

$('#errorNombre').hide()
$('#errorApellido').hide()
$('#errorDni').hide()
$('#errorDireccion').hide()
$('#errorCiudad').hide()


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
  $('.tranferenciaOk').click(()=>{
    $('#resumenCompra').empty()
    $('#resumenCompra').append(
      `<h1>GRACIAS POR COMPRAR EN RAGNAR STORE</h1>
      <a class="btn btn-dark" id="home" href="index.html">Volver a la Tienda</a>
      `
    )
    localStorage.clear()
        cart = []
  })
})



