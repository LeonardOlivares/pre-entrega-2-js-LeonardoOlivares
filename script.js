ArrayProductos = [
    {
        nombre: "Bicicleta Mujer",
        id: 1,
        genero: "femenino",
        categoria: "bicicletas",
        precio: 100000,
        stock: 12
    },
    {
        nombre: "Scooter eléctrico",
        id: 2,
        genero: "unisex",
        categoria: "scooter",
        precio: 149900,
        stock: 4
    },
    {
        nombre: "Casco Niño/a",
        id: 3,
        genero: "unisex",
        categoria: "seguridad",
        precio: 39990,
        stock: 30
    },
    {
        nombre: "Casco adulto hombre",
        id: 4,
        genero: "masculino",
        categoria: "seguridad",
        precio: 79990,
        stock: 3
    },
    {
        nombre: "Bicicleta Hombre",
        id: 5,
        genero: "masculino",
        categoria: "bicicletas",
        precio: 1590000,
        stock: 15
    },
    {
        nombre: "Bicicleta niño/a",
        id: 6,
        genero: "unisex",
        categoria: "bicicletas",
        precio: 530900,
        stock: 20
    },
    {
        nombre: "Guantes ciclismo",
        id: 7,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 12000,
        stock: 42
    },
    {
        nombre: "zapatillas ciclismo",
        id: 8,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 90000,
        stock: 24
    },
    {
        nombre: "Foco Led Blanco",
        id: 9,
        genero: "unisex",
        categoria: "accesorios",
        precio: 20000,
        stock: 3
    },
    {
        nombre: "Tricota",
        id: 10,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 11900,
        stock: 23
    }
]

let nombre
function pedirNombre() {
    nombre = prompt("Hola, ingresa tu nombre por favor")
    if (nombre.trim() === "") {
        alert("Ingrese un nombre válido")
        pedirNombre()
    } else {
        alert(nombre + " Bienvenido al simulador de la tienda de movilidad sostenible")
    }
}



pedirNombre()

let acciones = " Ingresa la opción que deseas realizar\n\n1 - Para visualizar productos de la tienda \n2 - Para filtrar por genero \n3 - Para filtrar por categoria\n4 - Para agregar producto al carrito por id \n5 - Para quitar el último producto del carrito\n6 - Para ver carrito\n\n0 - para salir"
let opcionmenu
let carrito = []

function listarProductos(ArrayProductos) {
    return ArrayProductos.map(producto => {
        return `ID: ${producto.id} Nombre: ${producto.nombre} Precio: ${producto.precio} Stock: ${producto.stock}`
    }).join("\n")
}

do {
    opcionmenu = Number(prompt(acciones))
    switch (opcionmenu) {
        case 1:
            alert("Nuestros Productos son: \n" + listarProductos(ArrayProductos))
            break
        case 2:
            let genero = prompt("Ingrese un genero para filtrar los productos\n(Masculino - Femenino - Unisex)").toLowerCase()
            let prodFiltradosGenero = ArrayProductos.filter(producto => producto.genero === genero)
            if (prodFiltradosGenero.length === 0) {
                alert("No existen productos del genero ingresado")
            } else {
                alert("Lista de productos filtrados por genero " + genero + ": \n" + listarProductos(prodFiltradosGenero))
            }
            break
        case 3:
            let categoria = prompt("Ingrese una categoría para filtrar los productos\n(Bicicletas - Scooter - Seguridad - Accesorios - Indumentaria)").toLowerCase()
            let prodFiltradosCategoria = ArrayProductos.filter(producto => producto.categoria === categoria)
            if (prodFiltradosCategoria.length === 0) {
                alert("No existen productos con la categoría ingresada")
            } else {
                alert("Lista de productos filtrados por la categoría " + categoria + ": \n" + listarProductos(prodFiltradosCategoria))
            }
            break
        case 4:
            let idProducto = Number(prompt("Ingrese el ID del producto que desea agregar al carrito \n\n" + listarProductos(ArrayProductos)))
            let prodAgregado = ArrayProductos.find(producto => producto.id === idProducto)
            if (prodAgregado) {
                carrito.push(prodAgregado)
                alert("Producto agregado correctamente, revise su carrito")
            } else {
                alert("El id ingresado no corresponde a ningún producto en la lista")
            }
            break
        case 5:
            carrito.pop()
            alert("Su último producto agregado fue eliminado correctamente, revise su carrito")
            break
        case 6:
            alert("Carrito de compras: \n" + listarProductos(carrito))
            break

        default:
            if (opcionmenu != 0) {
                alert("Ingrese una opcion del listado")
              }
            break
    }



} while (opcionmenu != 0)

alert("Muchas gracias por utilizar nuestro simulador" )