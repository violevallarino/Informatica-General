const contenedorResultado = document.querySelector("#resultado");
let pasta = 0
let pollo = 0
let ensalada = 0

for(let i = 0;i <12; i++){
    let eleccion = Number(prompt(`¿Qué va a cenar el Invitado ${i + 1}? Seleccione un número del 1 al 3:`,'  1=Pasta  2=Pollo  3=Ensalada'))
    while(isNaN (eleccion)||eleccion< 1||eleccion> 3){
        eleccion = Number(prompt('El dato ingresado es incorrecto, por favor ingrese un número del 1 al 3.'))
    }
if (eleccion == 1){
    pasta++
}else if (eleccion == 2){
    pollo++
}else if (eleccion == 3){
    ensalada++
}
}
let porcentajePasta = (pasta * 100) / 12;
let porcentajePollo = (pollo * 100) / 12;
let porcentajeEnsalada = (ensalada * 100) / 12;
let mayorCantidadVotos = Math.max(pasta, pollo, ensalada);
let menuMasElegido = "";

if (mayorCantidadVotos === pasta) {
    menuMasElegido = "Pasta";
} else if (mayorCantidadVotos === pollo) {
    menuMasElegido = "Pollo";
} else if (mayorCantidadVotos === ensalada) {
    menuMasElegido = "Ensalada";
}

contenedorResultado.innerText = ` 
El porcentaje de personas que eligieron pasta fue de: ${porcentajePasta.toFixed(1)}%. 
El porcentaje de personas que eligieron pollo fue de: ${porcentajePollo.toFixed(1)}%.
El porcentaje de personas que eligieron ensalada fue de: ${porcentajeEnsalada.toFixed(1)}%.  
El plato más elegido fue: ${menuMasElegido}.`;
