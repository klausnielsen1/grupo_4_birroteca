const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}




//login


const camposLogin = {
    usuario: false,
    password: false
}


const formLogin = document.getElementById("login-form");
const inputsLogin = document.querySelectorAll("input-login");

const validarFormularioLogin = (e) => {
    switch(e.target.name) {
        case "usuario":
           validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break; 
      
    }
}
const validarCampoLogin = (expresion, input, campo) => {
    if(expresiones.test(input.value)) {
        document.getElementById('').classList.remove('');
        document.getElementById('').classList.add('');
        document.querySelector('').classList.add('');
        document.querySelector('').classList.remove('');
        document.querySelector('').classList.remove('');
        campos[campo] = true;

    } else{
        document.getElementById('').classList.add('');
        document.getElementById('').classList.remove('');
        document.querySelector('').classList.add('');
        document.querySelector('').classList.remove('');
        document.querySelector('').classList.add('');
        campos[campo] = false;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})




formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.password) {
        formLogin.reset();


        
    }
});



//register




const camposRegister = {
    usuario: false,
    password: false
}


const formRegister = document.getElementById("form-register");
const inputsRegister = document.querySelectorAll("input-register");

const validarFormularioRegister = (e) => {
    switch(e.target.name) {
        case "usuario":
           validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break; 
      
    }
}
const validarCampoRegister = (expresion, input, campo) => {
    if(expresiones.test(input.value)) {
        document.getElementById('').classList.remove('');
        document.getElementById('').classList.add('');
        document.querySelector('').classList.add('');
        document.querySelector('').classList.remove('');
        document.querySelector('').classList.remove('');
        campos[campo] = true;

    } else{
        document.getElementById('').classList.add('');
        document.getElementById('').classList.remove('');
        document.querySelector('').classList.add('');
        document.querySelector('').classList.remove('');
        document.querySelector('').classList.add('');
        campos[campo] = false;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})




formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.password) {
        formLogin.reset();


        
    }
});