
const productos = [
  { id: 1, nombre: "Procesador Ryzen 5", precio: 120000 },
  { id: 2, nombre: "Placa de video RTX 3060", precio: 300000 },
  { id: 3, nombre: "Memoria RAM 16GB", precio: 60000 },
  { id: 4, nombre: "Disco SSD 1TB", precio: 80000 }
];

let carrito = [];

// mostramos el producto
const contenedor = document.getElementById("productos");

productos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <strong>${producto.nombre}</strong> - $${producto.precio}
    <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});

function agregarAlCarrito(id) {
  const producto = productos.find((prod) => prod.id === id);
  carrito.push(producto);
  mostrarCarrito();

  Swal.fire({
    icon: 'success',
    title: 'Agregado',
    text: `${producto.nombre} fue agregado al carrito.`,
    timer: 1200,
    showConfirmButton: false
  });
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
}

// aca eliminamos le carrito
document.getElementById("vaciarCarrito").addEventListener("click", () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Esto vaciará todo el carrito",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, vaciar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = [];
      mostrarCarrito();
      Swal.fire('Carrito vaciado', '', 'success');
    }
  });
});
