const carrito = {
    productos: [],
    agregarProducto(nombre, precio) {
        this.productos.push({ nombre, precio })
    },
    calcularTotal() {
        let sum = 0
        for (const total of this.productos) {
            sum += total.precio
        }
        return sum
    }
}

const aplicarDescuento = (total, porcentaje) => {
    let descuento = (total * porcentaje) / 100
    return total - descuento
}

carrito.agregarProducto("Manzana", 0.50);
carrito.agregarProducto("Pan", 1.20);
carrito.agregarProducto("Leche", 0.90);

const totalCarrito = carrito.calcularTotal();

// Así la puedes usar con cualquier porcentaje después
console.log(aplicarDescuento(totalCarrito, 10)); // 10% de descuento
console.log(aplicarDescuento(totalCarrito, 25));  // 25% de descuento
console.log(aplicarDescuento(totalCarrito, 5));  // 5% de descuento