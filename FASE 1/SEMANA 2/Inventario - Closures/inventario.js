function crearInventario(valor) {
    let stock = valor;
    return {
        agregarStock(cantidad) {
            stock += cantidad;
            return stock

        },
        venderProducto(cantidad) {
            if (cantidad > stock) {
                throw new Error("Stock insuficiente");
            }
            stock -= cantidad;
            return stock;
        }
        ,
        consultarStock() {
            return stock
        }


    }
}

const camisetas = crearInventario(50)
const pantalones = crearInventario(30)

console.log(camisetas.agregarStock(10))
console.log(camisetas.venderProducto(17))
console.log(camisetas.consultarStock())
console.log(pantalones.agregarStock(60))
console.log(pantalones.venderProducto(5))
console.log(pantalones.consultarStock())

try {
    pantalones.venderProducto(1000);
}
catch (error) {
    console.log(error.message)
}