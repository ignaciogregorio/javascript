import { cart } from "./main.js";




    $("#detallePago").append(
        `<tr>
        <td><strong>Imagen</strong></td>
        <td><strong>Cantidad</strong></td>
        <td><strong>Nombre</strong></td>
        <td><strong>Precio</strong></td>
        </tr>`
        )
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