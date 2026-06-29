const contenedorResultado = document.querySelector("#resultado");
let secreto = 0
let intentos = 10


let numeroUsuario = Number(prompt('Ingrese su primer intento aquí. Escribe un número del 1 al 100'));
if (isNaN(numeroUsuario)){
    let pedirNumero = prompt('El dato ingresado no es valido. Ingrese un número del 1 al 100.');
}else if(numeroUsuario=>101||numeroUsuario<=0){
    let incorrecto = prompt('Uy! Ese no es...Intenta otra vez!','Ingresa un número del 1 al 100');
    intentos--;
}else{
    contenedorResultado.innerText ='Acertaste! El número correcto es'+secreto;
}
