
let usuarios = [];

let formulario;
let inputNombre;
let inputApellido;
let inputApellidoDos;
let inputRun;
let inputEdad;
let tabla;

class Usuarios {
  constructor(nombre, apellido, apellidoDos, run, edad) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.apellidoDos = apellidoDos.toUpperCase();
    this.run = run;
    this.edad = edad;
  }
}

function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("inputNombre");
  inputApellido = document.getElementById("inputApellido");
  inputApellidoDos = document.getElementById("inputApellidoDos");
  inputRun= document.getElementById("inputRun");
  inputEdad = document.getElementById("inputEdad");
  tabla = document.getElementById("tablaUsuarios");
}

function inicializarEventos() {
  formulario.onsubmit = (e) => validarFormulario(e);
}

function validarFormulario(e) {
  e.preventDefault();
  let nombre = inputNombre.value;
  let apellido = inputApellido.value;
  let apellidoDos = inputApellidoDos.value;
  let run = inputRun.value;
  let edad = parseInt(inputEdad.value);
  let usuario = new Usuarios(nombre, apellido, apellidoDos, run, edad);
  usuarios.push(usuario);
  formulario.reset();

  limpiarTabla();
  agregarUsuariosTabla();
  almacenarUsuariosLocalStorage();
}

function agregarUsuariosTabla() {
  usuarios.forEach((usuario) => {
    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.apellidoDos}</td>
      <td>${usuario.run}</td>
      <td>${usuario.edad}</td>`;
    tabla.tBodies[0].append(filaTabla);
  });
}

function limpiarTabla() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }
}

function almacenarUsuariosLocalStorage() {
  localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
}

function obtenerUsuariosLocalStorage() {
  let usuariosAlmacenados = localStorage.getItem("listaUsuarios");
  console.log(typeof usuariosAlmacenados)
  if (usuariosAlmacenados !== null) {
    usuarios = JSON.parse(usuariosAlmacenados);
  }
}

function main() {
  inicializarElementos();
  inicializarEventos();
  obtenerUsuariosLocalStorage();
  agregarUsuariosTabla();
}

main();



//  IMPRIMIR COTIZACION
