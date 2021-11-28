// Crear funciones anónimas 
const enviar = document.getElementById('boton');

const evento = () => {
    console.log('NÚMERO DE CLICKS')
}

enviar.addEventListener('click', evento);

const nombre = document.getElementById('name');

const evento_dos = () => {
    console.log('NÚMERO DE LETRAS')
}
 
nombre.addEventListener('input', evento_dos);

// Eliminar funciones
enviar.removeEventListener('click', evento);
nombre.removeEventListener('input', evento_dos);

// Crear funciones
const evento_tres = function accion(){
    console.log('Número de clicks');
}

const evento_cuatro = function accion_dos(){
    console.log('Número de letras');
}

nombre.addEventListener('input', evento_cuatro);
enviar.addEventListener('click', evento_tres);

//Aprendido en clase

// Validar un correo
const email = document.getElementById('email');
const cad = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const evento_cinco = function accion_tres(){
    if(cad.test(email.value))
        console.log('Email válido')
    
    else
        console.log('Email no válido');
}

email.addEventListener('input', evento_cinco);

// Validar un teléfono 
const telefono = document.getElementById('tel');
const evento_seis = function accion_cuatro(){
    if(telefono.value.length==10)
        console.log('Teléfono válido');
    else
        console.log('Teléfono no válido, digite a 10 números');
}

tel.addEventListener('input', evento_seis);

// Valida la longitud de un texto
const mensaje = document.getElementById('msj');
const evento_siete = function accion_cinco(){
    if(mensaje.value.length>30)
        console.log('El mensaje no debe exceder los 30 caracteres');
    else
        console.log('Caracteres disponibles: ' + (30-mensaje.value.length));
}

mensaje.addEventListener('input', evento_siete);