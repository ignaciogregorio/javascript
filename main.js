import {Carro } from "./carro.js";
import {Producto } from "./producto.js";
import { mensaje, total, guardarLocalStorage, subtotal} from "./funciones.js";


// INICIO CARGA DOM X JSON 3 CATEGORIAS//
 
const URLGET = "productos.json"
//Agregamos un botón con jQuery
let misDatos = ''

$(".futbolNacional__btn").click(() => {

    $(".futbolNacional").css({

        "background-color": "black",
        "color": "white",
        "border": "5px solid black",
        "transform": "scale(0.99)",
        "opacity": "100%",
    }
    )
    $(".futbolNacional__btn").css({

        "background-color": "black",
        "color": "white",
    }
    )
    $(".basket").css({
        "opacity": "70%",
    }
    )
    $(".basket__btn").css({

        "background-color": "rgba(255, 255, 255, 0.756)",
        "color": "green",
    }
    )
    $(".rugby").css({

        "opacity": "70%",
    }
    )
    $(".rugby__btn").css({

        "background-color": "rgba(255, 255, 255, 0.756)",
        "color": "green",
    }
    )

        $('#products').empty()
        $.get(URLGET, function (respuesta, estado) {
              if(estado === "success"){
                misDatos = respuesta;
                let categoria = ''
                categoria = misDatos.filter(productos => productos.categoria == "futbol")
                for (const producto of categoria) {
                    $('#products').append(
                                                `
                                                <div class=" cardProducto " style="width: 15rem;">
                                                        <img src="${producto.img}" class="card-img-top imgProducto" width=100% alt="...">
                                                        <img src="${producto.img2}" style="display:none" class="card-img-top imgProducto2" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title ">${producto.nombre}</h5>
                                                            <p class="card-text mt-2">$${producto.precio}</p>
                                                            <a href="#" class="btn btn-primary addCartBtn${producto.sku}" onclick="crearCarrito(${producto.sku})">Agregar a Carrito</a>
                                                        </div>
                                                </div>`
                    )

                    //le doy estilo a las imagenes del DOM//

                    $(".cardProducto").hover(
                        function () {
                            $(this).css({
                                "border": "5px solid green",
                                "transform": "scale(0.99)",
                            })
                        },
                        function () {
                            $(this).css({
                                "transform": "scale(1)",
                                "border": "none",
                            })
                        }
                    )
                }
              }
        });

});

$(".basket__btn").click(() => {
    $(".basket").css({

        "background-color": "black",
        "color": "white",
        "border": "5px solid black",
        "transform": "scale(0.99)",
        "opacity": "100%",
    }
    )
    $(".basket__btn").css({

        "background-color": "black",
        "color": "white",
    }
    )
    $(".futbolNacional").css({
        "opacity": "70%",
    }
    )
    $(".futbolNacional__btn").css({

        "background-color": "rgba(255, 255, 255, 0.756)",
        "color": "green",
    }
    )
    $(".rugby").css({

        "opacity": "70%",
    }
    )
    $(".rugby__btn").css({

        "background-color": "rgba(255, 255, 255, 0.756)",
        "color": "green",
    }
    )
    $('#products').empty()
        $.get(URLGET, function (respuesta, estado) {
              if(estado === "success"){
                misDatos = respuesta;
                let categoria = ''
                categoria = misDatos.filter(productos => productos.categoria == "basket")

                for (const producto of categoria) {
                    $('#products').append(
                        `<div class="d-fle cardProducto " style="width: 15rem;">
                                                        <img src="${producto.img}" class="card-img-top imgProducto" width=100% alt="...">
                                                        <img src="${producto.img2}" style="display:none" class="card-img-top imgProducto2" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title ">${producto.nombre}</h5>
                                                            <p class="card-text mt-3">$${producto.precio}</p>
                                                            <a href="#" class="btn btn-primary addCartBtn${producto.sku}" onclick="crearCarrito(${producto.sku})">Agregar a Carrito</a>
                                                        </div>
                                                    </div>`
                    )
                    //le doy estilo a las imagenes del DOM//

                    $(".cardProducto").hover(
                        function () {
                            $(this).css({
                                "border": "5px solid green",
                                "transform": "scale(0.99)",
                            })
                        },
                        function () {
                            $(this).css({
                                "transform": "scale(1)",
                                "border": "none",
                            })
                        }
                    )
                }
              }
        });

});
$(".rugby__btn").click(() => {
    $(".rugby").css({

        "background-color": "black",
        "color": "white",
        "border": "5px solid black",
        "transform": "scale(0.99)",
        "opacity": "100%",
    }
    )
    $(".rugby__btn").css({

        "background-color": "black",
        "color": "white",
    }
    )
    $(".futbolNacional").css({
        "opacity": "70%",
    }
    )
    $(".futbolNacional__btn").css({

        "background-color": "rgba(255, 255, 255, 0.756)",
        "color": "green",
    }
    )
    $(".basket").css({

        "opacity": "70%",
    }
    )
    $(".basket__btn").css({

        "background-color": "rgba(255, 255, 255, 0.756)",
        "color": "green",
    }
    )
    $('#products').empty()
        $.get(URLGET, function (respuesta, estado) {
              if(estado === "success"){

                misDatos = respuesta;
                let categoria = ''
                categoria = misDatos.filter(productos => productos.categoria == "rugby")
 
                for (const producto of categoria) {
                    $('#products').append(
                        `<div class="d-fle cardProducto " style="width: 15rem;">
                                                        <img src="${producto.img}" class="card-img-top imgProducto" width=100% alt="...">
                                                        <img src="${producto.img2}" style="display:none" class="card-img-top imgProducto2" alt="...">
                                                        <div class="card-body">
                                                            <h5 class="card-title ">${producto.nombre}</h5>
                                                            <p class="card-text mt-3">$${producto.precio}</p>
                                                            <a href="#" class="btn btn-primary addCartBtn${producto.sku}" onclick="crearCarrito(${producto.sku})">Agregar a Carrito</a>
                                                        </div>
                                                    </div>`
                    )
                    //le doy estilo a las imagenes del DOM//

                    $(".cardProducto").hover(
                        function () {
                            $(this).css({
                                "border": "5px solid green",
                                "transform": "scale(0.99)",
                            })
                        },
                        function () {
                            $(this).css({
                                "transform": "scale(1)",
                                "border": "none",
                            })
                        }
                    )
                }
              }
        });
});
// FINAL CARGA DOM X JSON//


// FUNCION PARA AGREGAR ITEMS AL CARRITO//

export let cart = []

window.crearCarrito = function crearCarrito(myId) {

    let productoAgregado = []

    productoAgregado = misDatos.find(productos => productos.sku == myId)

    // BUSCO REPETIDOS Y LOS SACO DEL CARRITO //

    let ultimoSku = productoAgregado.sku

    cart.forEach((item, index) => {

        if(item.sku === ultimoSku){
            cart.splice(index, 1)
            $(`#${productoAgregado.sku}`).remove()
            productoAgregado.cantidad ++
            console.log(cart)
        }
    })


// PUSHEO ITEMS SI NO SE REPITEN // 
    cart.push(new Carro(productoAgregado.sku, productoAgregado.cantidad, productoAgregado.categoria, productoAgregado.nombre, productoAgregado.precio, productoAgregado.img))
    mensaje("Producto Agregado a Carrito", "success")
    let subtotal1 = productoAgregado.cantidad * productoAgregado.precio

    // CONTADOR DE ITEMS CARRITO//
    $('#contador').empty()
    $('#contador').append(
        `${cart.length}`
    )

//GENERO DOM DEL CARRITO JQUERY//  

    $("#items").append(
            `<tr class="container col-12" id="${productoAgregado.sku}">
              <td><img src="${productoAgregado.img}" height="50px" alt="..."></td>
              <td class="cantidad${productoAgregado.sku}"> ${productoAgregado.cantidad}</td>
              <td>${productoAgregado.nombre}</td>
              <td>$${productoAgregado.precio}</td>
              <td class="subtotal${productoAgregado.sku}">$${subtotal1}</td>
              <td><select class="form-control">
                                        <option selected>Talle</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
              </td>
              <td><button class="btnDisminuir${productoAgregado.sku} btn btn-danger"> - </button></td>
              <td><button class="btnAumentar${productoAgregado.sku} btn btn-success"> + </button></td>
              <td><button id="id${productoAgregado.sku}" class="btnEliminar"> Eliminar X </button></td>
              </tr>
              <hr>`
    )

    // BOTON DISMINUIR DESHABILITADO PARA EVITAR CANTIDADES MENORES A 0//
    if(productoAgregado.cantidad === 1 ){
        $(`.btnDisminuir${productoAgregado.sku}`).prop('disabled', true)
    }else{
        $(`.btnDisminuir${productoAgregado.sku}`).prop('disabled', false)
    }

    //AUMENTAR CANTIDADES//

    $(`.btnAumentar${productoAgregado.sku}`).click(()=>{

        $(`.cantidad${productoAgregado.sku}`).empty()
        productoAgregado.cantidad ++
        cart.forEach((item) => {
            if (item.sku == productoAgregado.sku) {
                item.cantidad = productoAgregado.cantidad
            }
            if(productoAgregado.cantidad === 1 ){
                $(`.btnDisminuir${productoAgregado.sku}`).prop('disabled', true)
            }else{
                $(`.btnDisminuir${productoAgregado.sku}`).prop('disabled', false)
            }
        })
        $(`.cantidad${productoAgregado.sku}`).append(`${productoAgregado.cantidad}`)
        subtotal1 = productoAgregado.cantidad * productoAgregado.precio
        $(`.subtotal${productoAgregado.sku}`).empty()
        $(`.subtotal${productoAgregado.sku}`).append(`$${subtotal1}`)


        guardarLocalStorage()
        subtotal()

    })

    // DISMINUIR CANTIDADES//
    $(`.btnDisminuir${productoAgregado.sku}`).click(()=>{

        $(`.cantidad${productoAgregado.sku}`).empty()
        productoAgregado.cantidad --
        cart.forEach((item) => {
            if (item.sku == productoAgregado.sku) {
                item.cantidad = productoAgregado.cantidad
            }
            if(productoAgregado.cantidad === 1 ){
                $(`.btnDisminuir${productoAgregado.sku}`).prop('disabled', true)
            }else{
                $(`.btnDisminuir${productoAgregado.sku}`).prop('disabled', false)
            }
        })
        $(`.cantidad${productoAgregado.sku}`).append(`${productoAgregado.cantidad}`)
        subtotal1 = productoAgregado.cantidad * productoAgregado.precio
        $(`.subtotal${productoAgregado.sku}`).empty()
        $(`.subtotal${productoAgregado.sku}`).append(`$${subtotal1}`)

        
        guardarLocalStorage()
        subtotal()
    })

subtotal()

    //BOTON ELIMINAR//

$(`#id${productoAgregado.sku}`).click(() => {

    $(`#${productoAgregado.sku}`).remove()

    cart.forEach((item, index) => {
        //buscamos item por item , para ver mi el mio coincide con alguno de los que estan en el array cart
        //el index te va a decir en que posicion esta
        if (item.sku == productoAgregado.sku) {
            cart.splice(index, 1)

        }
        $('#contador').empty()
        $('#contador').append(
            `${cart.length}`
        )
        if(cart.length == 0){
            $('#confirmar').hide()
        }else{
            $('#confirmar').show()
        }
        guardarLocalStorage()
        subtotal()

    })

    mensaje("Producto Eliminado", "danger")


    })

    //ESTILOS PARA EL CARRITO//

    $(".contenedorCarrito").css({
        "border-bottom": "1px solid black",
        "margin-bottom": "20px",
    }
    )

    $(".btnEliminar").css({
        "color": "black",
        "background-color": "white",
        "border": "1px solid black",
        "padding": "5px",
        "margin-bottom": "20px",
        "text-transform": "uppercase"
    })

    $(".btnEliminar").hover(function () {
        $(this).css({
            "background-color": "black",
            "color": "white"
        })
    },
        function () {
            $(this).css({
                "background-color": "white",
                "color": "black",
            })
        }
    )
    guardarLocalStorage()

   //ESCONDO BOTON DE FINALIZAR SI CARRITO ESTA VACIO//

    if(cart.length == 0){
        $('#confirmar').hide()
    }else{
        $('#confirmar').show()
    }
}


//FUNCION PARA RECUPERAR CARRO //

function cargarLocalStorage() {
    if (localStorage.getItem("cart") !== null)
        cart = JSON.parse(localStorage.getItem("cart"))
        for (const prod of cart) {
        let subtotal1 = prod.cantidad * prod.precio
        $("#items").append(
            `<tr class="container" id="${prod.sku}">
              <td><img src="${prod.imgNombre}" height="50px" alt="..."></td>
              <td class="cantidad${prod.sku}"> ${prod.cantidad}</td>
              <td>${prod.nombre}</td>
              <td>$${prod.precio}</td>
              <td class="subtotal${prod.sku}">$${subtotal1}</td>
              <td><select class="form-control">
                    <option selected>Talle</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
              </td>
              <td><button class="btnDisminuir${prod.sku} btn btn-danger"> - </button></td>
              <td><button class="btnAumentar${prod.sku} btn btn-success"> + </button></td>
              <td><button id="id${prod.sku}" class="btnEliminar"> Eliminar X </button></td>
            </tr>
            `
    )
    $('#contador').empty()
    $('#contador').append(
        `${cart.length}`
    )
    // BOTON DISMINUIR DESHABILITADO PARA EVITAR CANTIDADES MENORES A 0//
    if(prod.cantidad === 1 ){
        $(`.btnDisminuir${prod.sku}`).prop('disabled', true)
    }else{
        $(`.btnDisminuir${prod.sku}`).prop('disabled', false)
    }
 
    //AUMENTAR CANTIDADES//

    $(`.btnAumentar${prod.sku}`).click(()=>{

        $(`.cantidad${prod.sku}`).empty()
        prod.cantidad ++
        cart.forEach((item) => {
            if (item.sku == prod.sku) {
                item.cantidad = prod.cantidad
            }
            if(prod.cantidad === 1 ){
                $(`.btnDisminuir${prod.sku}`).prop('disabled', true)
            }else{
                $(`.btnDisminuir${prod.sku}`).prop('disabled', false)
            }
        })
        $(`.cantidad${prod.sku}`).append(`${prod.cantidad}`)
        subtotal1 = prod.cantidad * prod.precio
        $(`.subtotal${prod.sku}`).empty()
        $(`.subtotal${prod.sku}`).append(`$${subtotal1}`)


        guardarLocalStorage()
        subtotal()

    })

    // DISMINUIR CANTIDADES//
    $(`.btnDisminuir${prod.sku}`).click(()=>{

        $(`.cantidad${prod.sku}`).empty()
        prod.cantidad --
        cart.forEach((item) => {
            if (item.sku == prod.sku) {
                item.cantidad = prod.cantidad
            }
            if(prod.cantidad === 1 ){
                $(`.btnDisminuir${prod.sku}`).prop('disabled', true)
            }else{
                $(`.btnDisminuir${prod.sku}`).prop('disabled', false)
            }
        })
        $(`.cantidad${prod.sku}`).append(`${prod.cantidad}`)
        subtotal1 = prod.cantidad * prod.precio
        $(`.subtotal${prod.sku}`).empty()
        $(`.subtotal${prod.sku}`).append(`$${subtotal1}`)

        
        guardarLocalStorage()
        subtotal()
    })
    subtotal()
    //BOTON ELIMINAR//
    $(`#id${prod.sku}`).click(() => {

        $(`#${prod.sku}`).remove()
    
        cart.forEach((item, index) => {
            //buscamos item por item , para ver mi el mio coincide con alguno de los que estan en el array cart
            //el index te va a decir en que posicion esta
            if (item.sku == prod.sku) {
                cart.splice(index, 1)
    
            }
            //ACTUALIZO CONTADOR//
            $('#contador').empty()
            $('#contador').append(
                `${cart.length}`
            )
             //ESCONDO BOTON DE FINALIZAR SI CARRITO ESTA VACIO//
            if(cart.length == 0){
                $('#confirmar').hide()
            }else{
                $('#confirmar').show()
            }
            guardarLocalStorage()
            subtotal()

        })

        mensaje("Producto Eliminado", "danger")


        })

       //ESTILOS PARA EL CARRITO//

        $(".contenedorCarrito").css({
            "border-bottom": "1px solid black",
            "margin-bottom": "20px",
        }
        )

        $(".btnEliminar").css({
            "color": "black",
            "background-color": "white",
            "border": "1px solid black",
            "padding": "5px",
            "margin-bottom": "20px",
            "text-transform": "uppercase"
        })

        $(".btnEliminar").hover(function () {
            $(this).css({
                "background-color": "black",
                "color": "white"
            })
        },
            function () {
                $(this).css({
                    "background-color": "white",
                    "color": "black",
                })
            }
        )
    }

}

cargarLocalStorage()


//FUNCION DEL MODAL(CARRITO)//


let modal = document.getElementById("myModal");
const items = document.getElementById("items")
$('#myBtn').click (()=>{
    $('#myModal').css({
        "display" : "block",
    })
})
$('.close').click(()=>{

    $('#myModal').css({
        "display" : "none",
    })
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//BORRAR CARRITO//
$('#clean').click(()=>{

    items.textContent = "";
    $("#items").append(
        `<tr>
        <td><strong>Imagen</strong></td>
        <td><strong>Cantidad</strong></td>
        <td><strong>Nombre</strong></td>
        <td><strong>Precio</strong></td>
        <td><strong>Sub-total</strong></td>
        <td><strong>Talle</strong></td>
        </tr>`
        )
        localStorage.clear()
        cart = []

        // VACIO CONTADOR//
        $('#contador').empty()
        $('#contador').append(
            `${cart.length}`
        )
        //ELIMINO BOTON POR CARRITO VACIO//
        if(cart.length == 0){
            $('#confirmar').hide()
        }else{
            $('#confirmar').show()
        }
    $("#subtotal").empty()

})

 //ESCONDO BOTON DE FINALIZAR SI CARRITO ESTA VACIO//

if(cart.length == 0){
    $('#confirmar').hide()
}else{
    $('#confirmar').show()
}


