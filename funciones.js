import { cart } from "./main.js";




// FUNCION MENSAJE //
function mensaje(message, bg) {
    const div = document.createElement("div")
    div.className = `alert message bg-${bg} text-white mt-2`;
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector(".prueba")
    const fluid = document.querySelector(".main__title")
    container.insertBefore(div, fluid)

    setTimeout(function () {
        document.querySelector(".message").remove()
    }, 2000)
}

// FUNCION PARA CALCULAR TOTAL //
function total() {
    const totalCompra = cart.map(items => items.precio * items.cantidad)
    const final = totalCompra.reduce((a,b) => a + b )
    return final
}

// FUNCION PARA GUARDAR LOCAL STORAGE//

function guardarLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
}


function subtotal(){
    $("#subtotal").empty()
    $("#subtotal").append(
        `<hr>
        <div class="subtotalAcumulado"> Total de Compra:$ ${total()}</div>`
    )

    $('.subtotalAcumulado').css({

        "text-align" : "center",
    }
    )

}





export{ mensaje, total, guardarLocalStorage, subtotal} 

