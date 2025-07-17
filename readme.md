

Punto 1
Se crea un array de objetos simulando productos disponibles:
const productos = [
  { id: 1, nombre: "Procesador Ryzen 5", precio: 120000 },
  { id: 2, nombre: "Placa de video RTX 3060", precio: 300000 },
  { id: 3, nombre: "Memoria RAM 16GB", precio: 60000 },
  { id: 4, nombre: "Disco SSD 1TB", precio: 80000 }
];

punto 2 Carrito de compras
Se inicializa un array vacío llamado carrito para guardar los productos seleccionados:


let carrito = [];


punto 3 
se genera el HTML dinámicamente usando forEach() para mostrar cada producto con su botón:


productos.forEach((producto) => {
  // Se crea un div con nombre, precio y botón "Agregar"
});

punto 4
Función agregarAlCarrito(id)
Busca el producto por ID.

Lo agrega al array carrito.

Llama a mostrarCarrito() para actualizar la vista.

Muestra un aviso usando SweetAlert2.

punto 5
 Función mostrarCarrito()
Limpia el <ul> del carrito.

Recorre el array carrito y crea elementos <li> para mostrar cada producto.

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
}

6. Vaciar carrito
Al hacer clic en el botón "Vaciar carrito", se muestra una confirmación con SweetAlert2.

Si el usuario acepta, se vacía el array y se actualiza la vista.

sweetalert2 reemplaza el prompt() y el alert() es una libreria