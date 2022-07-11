// Declaramos las variables

const login = []; // guarda logins en un array

let form;
let username;
let email;
let password;
let passwordTwo;

let tableUsers; // los usuarios se guardan en un array

// Inicio del programa

class User {
  constructor(usernameValue, emailValue, passwordValue, passwordTwoValue) {
    this.usernameValue = usernameValue.toUpperCase();
    this.emailValue = emailValue;
    this.passwordValue = passwordValue;
    this.passwordTwoValue = passwordTwoValue;
  }
  
}

function loginRegister() {
    form = document.getElementById('form');

    username = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    passwordTwo = document.getElementById('passwordTwo');
	tableUsers = document.getElementById("tableUsers"); 
	accessForm = document.getElementById("accessForm");

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();

});
}
//=========================================FUNCION LOGIN=================================================


function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordTwoValue = passwordTwo.value.trim();
	let userToRegister = new User(
		usernameValue, 
		emailValue, 
		passwordValue, 
		passwordTwoValue);
	login.push(userToRegister);
	form.reset();


	// Valida usuario

	if(usernameValue === '') {
		setErrorFor(username, 'El usuario no puede estar vacío');
	}else if (usernameValue.length < 3) {
		setErrorFor(username, 'Debe tener al menos 3 caracteres');
	}else if (usernameValue.length > 15) {
		setErrorFor(username, 'Debe tener menos de 15 caracteres');
	}else {
		setSuccessFor(username);
	}
	
	// valida el correo electrónico
	if(emailValue === '') {
		setErrorFor(email, 'El correo no puede estar vacío');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'El correo no es válido');
	} else {
		setSuccessFor(email);
	}
	
	// valida la contraseña
	if(passwordValue === '') {
		setErrorFor(password, 'La contraseña no puede estar vacía');
	} else if (passwordValue.length < 6) {
		setErrorFor(password, 'Debe tener al menos 6 caracteres');
	}else if (passwordValue.length > 15) {
		setErrorFor(password, 'Debe tener menos de 15 caracteres');
	}else {
		setSuccessFor(password);
	}
	
	// valida la contraseña coincidente
	if(passwordTwoValue === '') {
		setErrorFor(passwordTwo, 'La contraseña no puede estar vacía');
	} else if(passwordValue !== passwordTwoValue) {
		setErrorFor(passwordTwo, 'La contraseña no coincide');
	} else{
		setSuccessFor(passwordTwo);
	}

	if(usernameValue && emailValue && passwordValue && passwordTwoValue) {
		
		window.location.href = "./pages/reserva.html";
	}
	 

  	
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
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}  // fin de la función isEmail


function main() {
  loginRegister();
}
main();


