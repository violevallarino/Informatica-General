let numeroApostado = 0;
const mensajeCoincidencias = document.querySelector("#mensaje-coincidencias");
let boton1 = document.querySelector ('#btn-1')
boton1.addEventListener('click', () => {
    numeroApostado = 1; 
    console.log("Apostaste al número: " + numeroApostado);
})
let boton2 = document.querySelector ('#btn-2')
boton2.addEventListener('click', () => {
    numeroApostado = 2; 
    console.log("Apostaste al número: " + numeroApostado);
})
let boton3 = document.querySelector ('#btn-3')
boton3.addEventListener('click', () => {
    numeroApostado = 3; 
    console.log("Apostaste al número: " + numeroApostado);
})
let boton4 = document.querySelector ('#btn-4')
boton4.addEventListener('click', () => {
    numeroApostado = 4; 
    console.log("Apostaste al número: " + numeroApostado);
})
let boton5 = document.querySelector ('#btn-5')
boton5.addEventListener('click', () => {
    numeroApostado = 5; 
    console.log("Apostaste al número: " + numeroApostado);
})
let boton6 = document.querySelector ('#btn-6')
boton6.addEventListener('click', () => {
    numeroApostado = 6; 
    console.log("Apostaste al número: " + numeroApostado);
})
const resultadosDados = [];
for (let i=0;i<5;i++){
   let numeroAzar = Math.floor(Math.random() * 6) + 1;
resultadosDados.push(numeroAzar);
}
for (let i = 0; i < 5; i++) {
    let imagenDado = document.querySelector(`#dado-${i}`);
    imagenDado.src = `dado${resultadosDados[i]}.png`;
}
if (resultadosDados[i] === numeroApostado) {
    contadorAciertos++;
    imagenDado.style.border = "3px solid red";
    
} else {
    imagenDado.style.border = "none";
    
}
mensajeCoincidencias.innerText = 'Acertaste ${contadorAciertos} dados de tu apuesta al ${numeroApostado}.';