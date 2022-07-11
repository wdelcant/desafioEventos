//================================ FUNCIONES DE COTIZACIÓN ==========================================================

//inicio del código
// declaramos las variables de los precios
const users = [];
let form;
let formLogin;
let login;
const priceOne = 60000;
const priceTwo = 120000;
let total = 0;
let totalPersonas = 0;
let tableUsers;
let inmputUserName; // El usuario ingresa su nombre
let inputEmail; // Correo del usuario
let inmputPassword; // La contraseña del usuario
adults = inputAduls.value; // El usuario ingresa la cantidad de adultos
kids = inputKids.value; // El usuario ingresa la cantidad de niños

// Arma la clase de usuarios ingresados con un constructor
class User {    
    constructor(name, lastName, age, dni) {
        this.name = name.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.age = age;
        this.dni = dni;
    }
}

// seccion dom en html
function initializeElements() {
    // Datos de entrada de usuarios que arrendaran el inmueble
    form = document.getElementById("form");
    inputName = document.getElementById("inputName");
    inputLastName = document.getElementById("inputLastName");
    inputAge = document.getElementById("inputAge");
    inputDni = document.getElementById("inputDni");
    // Datos de la cantidad de adultos y niños
    inputAduls = document.getElementById("inputAdults");
    inputKids = document.getElementById("inputKids");
    // Datos de entrada para ingresar
    formLogin = document.getElementById("formLogin");
    inmputUserName = document.getElementById("inputUserName");
    inputEmail = document.getElementById("inputEmail");
    inputPassword = document.getElementById("inputPassword");
    // Datos de salida generados por el programa
    tableUsers = document.getElementById("tableUsers");

}

function initializeEvents() {
    form.onsubmit = (e) => { validateForm(e); }
}
// ====================================================================== //
//* login


formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        checkLogin();
    });

function checkLogin () { // muestra el menú principal del programa
    const userName = inmputUserName.value.trim(); // usuario ingresa su nombre
    const email = inputEmail.value.trim(); // correo del usuario
    const password = inputPassword.value.trim(); // usuario ingresa su contraseña

    if (userName === '') {
        setErrorFor(inmputUserName, 'El usuario no puede estar vacío');
    }
    else {setSuccessFor(inmputUserName);
    }

    if (email === '') {
        setErrorFor(inputEmail, 'El correo no puede estar vacío');
    }else if (!isEmail(email)) {
        setErrorFor(inputEmail, 'El correo no es válido');
    }else
     {setSuccessFor(inputEmail);
    }

    if (password === '') {
        setErrorFor(inputPassword, 'La contraseña no puede estar vacía');
    }
    else {setSuccessFor(inputPassword);
    }

    //muestra el menú principal del programa
}

function setErrorFor(input, message) { // elimina el error de los campos
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    // agrega el mensaje de error debajo de small
    small.innerText = message;
    //agrega la clase error
    formControl.className = 'form-control error';
   
    
} // fin de la función setErrorFor

function setSuccessFor(input) { // elimina el error de los campos
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
} // fin de la función setSuccessFor

function isEmail(email) { // valida el correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} // fin de la función isEmail



// ============================================================//

function checkUsers(e) { // registra los usuarios
    e.preventDefault();
    let numberUsers = ((adults + kids).value).trim();
    for (let i = 0; i < numberUsers; i++) {
        let name = (inputName.value).trim();
        let lastName = (inputLastName).value.trim();
        let age = parseInt((inputAge.value).trim());
        let dni = parseInt((inputDni.value).trim());
        let userToRegister = new User(
            name, 
            lastName, 
            age,
            dni
        );

        if (userToRegister.name === '' || userToRegister.lastName === '' || userToRegister.age === '' || userToRegister.dni === '') {
            setErrorFor(inputName, 'El nombre no puede estar vacío');
            setErrorFor(inputLastName, 'El apellido no puede estar vacío');
            setErrorFor(inputAge, 'La edad no puede estar vacía');
            setErrorFor(inputDni, 'El DNI no puede estar vacío');
        }else if (userToRegister.age < 0 || userToRegister.age > 120) 
        {
            setErrorFor(inputAge, 'La edad no puede ser menor a 0 ni mayor a 120');
        }else if (userToRegister.dni < 0 || userToRegister.dni > 999999999) 
        {
            setErrorFor(inputDni, 'El DNI no puede ser menor a 0 ni mayor a 999999999');
        }else if ((userToRegister.name).length < 3 || (userToRegister.name).length > 20) {
            
            setErrorFor(inputName, 'El nombre debe tener entre 3 y 20 caracteres');
        }else {
            
            setSuccessFor(inputName);
        }

        users.push(userToRegister);
        formulario.reset();

        cleanTable();
        addUser();
        localStorage();

    }
}

function addUser() {
  users.forEach((user) => {
    let rowTable = document.createElement("tr");
    rowTable.innerHTML = `
      <td>${user.name}</td>
      <td>${user.lastName}</td>
      <td>${user.age}</td>
      <td>${user.dni}</td>`;
    tableUsers.tBodies[0].append(rowTable);
  });
}



function cleanTable() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }
}

function localStorage() {
  localStorage.setItem("usersLists", JSON.stringify(productos));
}

function searchLocalStorage() {
  let savedUsers = localStorage.getItem("usersLists");
  console.log(typeof savedUsers)
  if (savedUsers !== null) {
    users = JSON.parse(savedUsers);
  }
}

// Funciones de orden superior
const menus = [{ // Lista de menú de opciones del día c/ entrada piscina 
    id: 1,
    name: 'Desayuno',
    price: 3500
    },{
    id: 2,
    name: 'Almuerzo',
    price: 8000
    },{ 
    id: 3,
    name: 'Once',
    price: 3500
    },
];

function menuComida(menus) {

    const nombreComidas = parseInt(prompt('Que deseas \n 1. Desayuno \n 2. Almuerzo \n 3. Once'));
    const comidasEncontrado = menus.find((comida) => comida.id === nombreComidas);
    if (comidasEncontrado) {
        alert(`El ${comidasEncontrado.name}, tiene un precio de: $${comidasEncontrado.price} por persona`);
            console.log(`El ${comidasEncontrado.name} tiene un precio de: $${comidasEncontrado.price} por persona`);
            console.log(comidasEncontrado);
    }
    else if (comidasEncontrado === undefined) {
        alert('No se encontró la comida');
    }
    showMenu();
    
}

// funciones

function oneCabin(adults, kids){ // cotizamos una cabaña
    let total = adults + kids;
        if (adults <= 0 && kids !== 0){
            alert('No se puede arrendar una cabañas sin adultos');
            showMenu();
        }
        else if (total > 6){
            /* Una alerta que se activa cuando el número de personas supera las 6. */
            alert('Sobrepasa el limite de personas por cabaña (6 personas), contrate dos si desea mas capacidad');
            showMenu();
        }
        // else (total <= 6)
        //     {registration();} 

    return total;
}

function twoCabin(adults, kids){ // cotizamos dos cabañas«
    let total = adults + kids;
        if (adults <= 0 && kids !== 0){
            alert('No se puede arrendar una cabañas sin adultos');
            showMenu();
        }
        else if (total > 12){
            /* Una alerta que se activa cuando el número de personas supera las 12. */
            alert('Sobrepasa el limite de personas máximo por cabaña, si son mas personas favor contactar a nuestro personal');
            showMenu();
        }
        // else (total <= 12)
        //     {registration();} 
    return total;
}

function showMenu(menu){ // muestra el menú principal del programa
    let options = prompt(`Estimado/a ${userName.toUpperCase()}, actualmente son ${adults + kids} personas ingresadas. \n \n Elija la opción que desea: \n 1. Una cabaña (hasta 6 personas) \n 2. Dos cabañas (hasta 12 personas) \n \n Escriba (EXIT) para salir`);
    return options;
}

function quotation(){ //cotizamos las cabañas y el menú
    let selectedOption = showMenu(); 
    while(selectedOption !== 'EXIT'){
        if(!isNaN(selectedOption !== '')){
                selectedOption = parseInt(selectedOption);
                 //Switch seleccionar la opción
                
                switch(selectedOption){
                    case 1: // una cabaña
                        let totalOne = oneCabin(adults, kids); // solicitamos el número de adultos y niños
                        total = total + priceOne
                        totalPersonas = totalPersonas + adults + kids 
                        const footOne = prompt(`¿Desea menu diario o menu completo? \n 1. Si \n 2. No`)
                        if(footOne === '1'){
                            menuComida(menus);
                        }
                        else if(footOne === '2'){
                            const decisionOne = prompt(`¿Desea seguir cotizando? \n 1. Si \n 2. No`)
                            if (decisionOne === '1'){
                                checkUsers();
                                selectedOption = showMenu();
                            }
                            else if (decisionOne === '2'){
                                alert(`El total a pagar es: $${total}`);
                                alert(`El total de personas ingresadas es: ${totalPersonas}`);
                                selectedOption = 'EXIT';
                            }
                            else if (decisionOne === undefined || decisionOne === ''){
                                alert('Opción no valida');
                            }
                        }
                        else if (footOne === undefined || footOne === '') {
                                alert('Ese menu no existe');
                        }	
                        break;

                    case 2: // dos cabañas
                        let totalTwo = twoCabin(adults, kids); // solicitamos el número de adultos y niños
                        total = total + priceTwo
                        totalPersonas = totalPersonas + adults + kids 
                        const footTwo = prompt(`¿Desea menu diario o menu completo? \n 1. Si \n 2. No`)
                        if (footTwo === '1'){
                            menuComida(menus);
                        }
                        else if (footTwo === '2'){
                            const decisionTwo = prompt(`¿Desea seguir cotizando? \n 1. Si \n 2. No`)
                            if (decisionTwo === '1'){
                            checkUsers();
                            selectedOption = showMenu()
                            }
                            else if (decisionTwo === '2'){
                            alert(`El total a pagar es: $${total}`);
                            alert(`El total de personas ingresadas es: ${totalPersonas}`);
                            selectedOption = 'EXIT';
                            }
                            else{
                                alert('Opción inválida');   
                            }
                        }
                        else {
                            alert('Opción no válida');
                        }
                        break;

                    default:
                        alert('Ingrese la opción 1 o 2 para continuar');
                        selectedOption = showMenu();
                        break;
                }
        }     
        else{ // si el usuario ingresa un número que no está entre 1,2 o 3
            alert('Ingrese la opción valida');  
            selectedOption = showMenu();
        }
        
    }
}
/* Llamando a la función principal. */

function main() {
  initializeElements();
  initializeEvents();
  checkUsers();
  searchLocalStorage();
  addUser();
  quotation();
}

main();

/* Fin de la función principal. */

// alert(`Adios ${userName.toUpperCase()}. Gracias por usar nuestro servicio de arriendo de cabañas.`);

