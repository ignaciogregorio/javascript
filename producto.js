export class Producto {
    constructor(sku, categoria, nombre, talle, cantidad, precio) {
        this.sku = sku;
        this.categoria = categoria;
        this.nombre = nombre;
        this.talle = talle;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
        this.img = "img/" + this.nombre + this.categoria + ".jpg"
        this.img2 = "img/" + this.nombre + this.categoria + "2" + ".jpg"
    }

}