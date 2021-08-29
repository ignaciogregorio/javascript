class Producto {
    constructor(sku, categoria, nombre, talle, cantidad, precio) {
        this.sku  = sku;
        this.categoria  = categoria;
        this.nombre  = nombre;
        this.talle  = talle;
        this.cantidad = cantidad;
        this.precio  = parseFloat(precio);
        this.img = "img/" + this.nombre+this.categoria + ".jpg"
        this.img2 = "img/" + this.nombre+this.categoria + "2" + ".jpg"
    }

}
class Carro {
    constructor(sku, categoria, nombre, precio) {
        this.sku  = sku;
        this.categoria  = categoria;
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.img = "img/" + this.nombre+this.categoria + ".jpg"


    }


}

//DEFINO ARRAY DE PRODUCTOS//

const productos = []
productos.push(new Producto("1", "Boca", "Camiseta", "L", "2", "6000"))
productos.push(new Producto("2", "River", "Camiseta", "L", "2", "5000"))
productos.push(new Producto("3", "Boca", "Short", "L", "2", "3000"))
productos.push(new Producto("4", "River", "Short", "M", "5", "2000"))
productos.push(new Producto("5", "Boca", "Campera", "XL", "1", "8000"))
productos.push(new Producto("6", "River", "Campera", "L", "5", "7000"))


//CARGAR PRODUCTOS DEL ARRAY X DOM//


function cargarProductos(){
    for (const producto of productos){

                        $('#products').append(
                                    `<div class="d-fle cardProducto " style="width: 18rem;">
                                            <img src="${producto.img}" class="card-img-top imgProducto" width=100% alt="...">
                                            <img src="${producto.img2}" style="display:none" class="card-img-top imgProducto2" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title ">${producto.categoria} ${producto.nombre}</h5>
                                                <button class="btn btn-primary  btnTalles${producto.sku}">Talles Disponibles</button>
                                                <div class="btn-group " id="divTalles${producto.sku}" style="display:none" >
                                                    <select class="form-select" >
                                                        <option selected>Seleccione el talle</option>
                                                        <option value="1">S</option>
                                                        <option value="2">M</option>
                                                        <option value="3">L</option>
                                                        <option value="4">XL</option>
                                                    </select>
                                                </div>
                                                <p class="card-text mt-3">$${producto.precio}</p>
                                                <a href="#" class="btn btn-primary addCartBtn" onclick="crearCarrito(${producto.sku})">Agregar a Carrito</a>
                                            </div>
                                        </div>`
                            )

$(`.btnTalles${producto.sku}`).click(()=>{
    $(`#divTalles${producto.sku}`).toggle('slow')
})
//le doy estilo a las imagenes del DOM//

$(".cardProducto").hover(
    function(){
        $(this).css({
            "border":"5px solid green",
            "transform": "scale(0.99)",
        })
    },
    function(){
        $(this).css({
            "transform": "scale(1)",
            "border":"none",
        })
    }

)

}

}
cargarProductos()


// FUNCION PARA AGREGAR ITEMS AL CARRITO//

let cart = []

function crearCarrito(myId){
    let productoAgregado = []
    productoAgregado = productos.find(productos => productos.sku == myId)
/* console.log(productoAgregado)
console.log(cart) */
    //pusheo los items al array de cart//
    cart.push(new Carro (productoAgregado.sku, productoAgregado.categoria, productoAgregado.nombre, productoAgregado.precio, productoAgregado.img))

    // funcion muestra mensaje ok//
    function mensaje(message, bg){
        const div = document.createElement("div")
        div.className = `alert message bg-${bg} text-white mt-2`;
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(".prueba")
        const fluid = document.querySelector(".main__title")
        container.insertBefore(div, fluid)

        setTimeout(function(){
            document.querySelector(".message").remove()
        },2000 )
    }
    mensaje("Producto Agregado a Carrito","success")

    //dom de carrito con JQUERY//
    $("#items").append(
        `<tr class="container" id="${productoAgregado.sku}">
          <td><img src="${productoAgregado.img}" height="50px" alt="..."></td>
          <td>${productoAgregado.sku}</td>
          <td>${productoAgregado.categoria} ${productoAgregado.nombre}</td>
          <td>$${productoAgregado.precio}</td>
          <td><button id="id${productoAgregado.sku}" class="btnEliminar"> Eliminar X </button></td>
        </tr>
        `
    )
        $(`#id${productoAgregado.sku}`).click(()=>{
            $(`#${productoAgregado.sku}`).slideUp("slow")
            mensaje("Producto Eliminado", "danger")
        })

//aplico estilos al carrito//

$(".contenedorCarrito").css({
    "border-bottom": "1px solid black",
    "margin-bottom":"20px",
}
)

$(".btnEliminar").css({
    "color": "black",
    "background-color": "white",
    "border": "1px solid black",
    "padding":"5px",
    "margin-bottom":"20px",
    "text-transform": "uppercase"
})

$(".btnEliminar").hover(function(){
    $(this).css({"background-color":"black",
    "color":"white"})},
    function(){
        $(this).css({"background-color":"white",
        "color":"black",})
    }
    )
    guardarLocalStorage()
}

console.log(cart[0])
console.log(cart)
console.log(cart[0].sku)

//FUNCION PARA GUARDAR CARRO EN LOCAL STORAGE//

function guardarLocalStorage(){
    localStorage.setItem("cart",JSON.stringify(cart))
}



//FUNCION PARA RECUPERAR CARRO //

function cargarLocalStorage(){
    if(localStorage.getItem("cart")!== null)
    cart = JSON.parse(localStorage.getItem("cart"))
    for (const prod of cart){
        $("#items").append(
            `<tr class="container" id="${prod.sku}">
              <td><img src="${prod.img}" height="50px" alt="..."></td>
              <td>${prod.sku}</td>
              <td>${prod.categoria} ${prod.nombre}</td>
              <td>$${prod.precio}</td>
              <td><button id="id${prod.sku}" class="btnEliminar"> Eliminar X </button></td>
            </tr>
            `
        )
            $(`#id${prod.sku}`).click(()=>{
                $(`#${prod.sku}`).slideUp("slow")
                mensaje("Producto Eliminado", "danger")
            })
        
    
    //aplico estilos al carrito//
    
    $(".contenedorCarrito").css({
        "border-bottom": "1px solid black",
        "margin-bottom":"20px",
    }
    )
    
    $(".btnEliminar").css({
        "color": "black",
        "background-color": "white",
        "border": "1px solid black",
        "padding":"5px",
        "margin-bottom":"20px",
        "text-transform": "uppercase"
    })
    
    $(".btnEliminar").hover(function(){
        $(this).css({"background-color":"black",
        "color":"white"})},
        function(){
            $(this).css({"background-color":"white",
            "color":"black",})
        }
        )
}
}
cargarLocalStorage()


//FUNCION DEL MODAL(CARRITO)//

let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let clean = document.getElementById("clean")
clean.className = "btn btn-dark"
const items = document.getElementById("items")
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//clean cart//
clean.onclick = function(){
    items.textContent = "";
    localStorage.clear()
}

