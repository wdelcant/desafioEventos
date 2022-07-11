//================ ALMACENAR OBJETOS EN LOCAL STORAGE  ================

let productos = [];

let formulario;
let inputNombre;
let inputPrecioCompra;
let inputPrecioVenta;
let inputCantidad;
let tabla;

class Productos {
  constructor(nombre, precioCompra, precioVenta, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
  }
}

function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("inputNombreProducto");
  inputPrecioCompra = document.getElementById("inputPrecioCompra");
  inputPrecioVenta = document.getElementById("inputPrecioVenta");
  inputCantidad = document.getElementById("inputCantidad");

  tabla = document.getElementById("tablaProductos");
}

function inicializarEventos() {
  formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
  event.preventDefault();
  let nombre = inputNombre.value;
  let precioCompra = parseFloat(inputPrecioCompra.value);
  let precioVenta = parseFloat(inputPrecioVenta.value);
  let cantidad = parseInt(inputCantidad.value);
  let producto = new Productos(
    nombre, 
    precioCompra, 
    precioVenta, 
    cantidad
    );
  productos.push(producto);
  formulario.reset();

  limpiarTabla();
  agregarProductosTabla();
  almacenarProductosLocalStorage();
}

function agregarProductosTabla() {
  productos.forEach((producto) => {
    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.precioCompra}</td>
      <td>${producto.precioVenta}</td>
      <td>${producto.cantidad}</td>`;
    tabla.tBodies[0].append(filaTabla);
  });
}

function limpiarTabla() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }
}

function almacenarProductosLocalStorage() {
  localStorage.setItem("listaProductos", JSON.stringify(productos));
}

function obtenerProductosLocalStorage() {
  let productosAlmacenados = localStorage.getItem("listaProductos");
  console.log(typeof productosAlmacenados)
  if (productosAlmacenados !== null) {
    productos = JSON.parse(productosAlmacenados);
  }
}

function main() {
  inicializarElementos();
  inicializarEventos();
  obtenerProductosLocalStorage();
  agregarProductosTabla();
}

main();