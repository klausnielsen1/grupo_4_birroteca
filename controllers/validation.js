const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
    usuario: false,
    password: false
}


const formLogin = document.getElementById("login-form");
const inputs = document.querySelectorAll("input-login");

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
           validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break; 
      
    }
}
const validarCampo = (expresion, input, campo) => {
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