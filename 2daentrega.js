class Producto {
    constructor(sku, categoria, nombre, talle, cantidad, precio) {
        this.sku  = sku;
        this.categoria  = categoria;
        this.nombre  = nombre;
        this.talle  = talle;
        this.cantidad = cantidad;
        this.precio  = parseFloat(precio);
        this.img = "img/" + this.nombre+this.categoria + ".jpg"
    }

}
class Carro {
    constructor(sku, categoria, nombre, precio) {
        this.sku  = sku;
        this.categoria  = categoria;
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);

    }


}

//DEFINO ARRAY DE PRODUCTOS//

const productos = []
productos.push(new Producto("1", "boca", "camiseta", "L", "2", "6000"))
productos.push(new Producto("2", "River", "Camiseta", "L", "2", "5000"))
productos.push(new Producto("3", "Boca", "Short", "L", "2", "3000"))
productos.push(new Producto("4", "River", "Short", "M", "5", "2000"))
productos.push(new Producto("5", "Boca", "Campera", "XL", "1", "8000"))
productos.push(new Producto("6", "River", "Campera", "L", "5", "7000"))



//CARGAR PRODUCTOS DEL ARRAY X DOM//

function cargarProductos(){

    const products = document.getElementById("products")
        for (const producto of productos){
            const cargaProductos = document.createElement("div");
            cargaProductos.className = "col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center mb-5"
            cargaProductos.innerHTML = `<div class="card d-fle" style="width: 18rem;">
                                            <img src="${producto.img}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title ">${producto.categoria} ${producto.nombre}</h5>
                                                <p class="card-text">$${producto.precio}</p>
                                                <a href="#" class="btn btn-primary addCartBtn" onclick="crearCarrito(${producto.sku})">Agregar a Carrito</a>
                                            </div>
                                        </div>
                                <br>`;
            products.appendChild(cargaProductos);
        }
}
cargarProductos()


// FUNCION PARA AGREGAR ITEMS AL CARRITO//

let cart = []

function crearCarrito(myId){

    let productoAgregado = []
    productoAgregado = productos.find(productos => productos.sku == myId)

    //pusheo los items al array de cart//

    cart.push(new Carro (productoAgregado.sku, productoAgregado.categoria, productoAgregado.nombre, productoAgregado.precio))

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
    console.log(cart)

    //dom de carrito//
    const items = document.getElementById("items")
    const carrito = document.createElement("div")
    carrito.className = "itemCarrito"
    carrito.innerHTML = `<h5 class="card-title "> Ha Comprado: ${productoAgregado.categoria} ${productoAgregado.nombre}</h5>
    <p class="card-text mb-5"> Precio: ${productoAgregado.precio}</p>`

    //boton para borrar productos del carrito//
    const eliminarItem = document.createElement('button')
    eliminarItem.innerHTML = `<button> Eliminar X </button>`
    eliminarItem.onclick = ()=>{
        mensaje("producto eliminado","danger")
        guardarLocalStorage()
        items.removeChild(carrito)
        items.removeChild(eliminarItem)
    }
    guardarLocalStorage()
    //Agrego todo por DOM//
    items.appendChild(carrito);
    items.appendChild(eliminarItem)

}

//FUNCION PARA GUARDAR CARRO EN LOCAL STORAGE//

function guardarLocalStorage(){
    localStorage.setItem("cart",JSON.stringify(cart))
}

//FUNCION PARA RECUPERAR CARRO //

function cargarLocalStorage(){
    if(localStorage.getItem("cart")!== null)
    cart = JSON.parse(localStorage.getItem("cart"))
    for (const prod of cart){
        const items = document.getElementById("items")
        const carrito = document.createElement("div")
        carrito.className = "itemCarrito"
        carrito.innerHTML = `<h5 class="card-title "> Ha Comprado: ${prod.categoria} ${prod.nombre}</h5>
        <p class="card-text mb-5"> Precio: ${prod.precio}</p>`
        const eliminarItem = document.createElement('button')
        eliminarItem.innerHTML = `<button> Eliminar X </button>`
        eliminarItem.onclick = ()=>{
            guardarLocalStorage()
            items.removeChild(carrito)
            items.removeChild(eliminarItem)
        }
        guardarLocalStorage()
        //Agrego todo por DOM//
        items.appendChild(carrito);
        items.appendChild(eliminarItem)
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


