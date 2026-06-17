let nombre = document.querySelector ('#nombre')
let formulario = document.querySelector ('#formulario')
let gasto = document.querySelector ('#gasto')
let guardar = document.querySelector ('#guardar')
let total = document.querySelector ('#total')
let porcentaje = document.querySelector ('#mayorGasto')
let clientes = 0 /*para calcular el número de clientes*/
let acumuladorGastos = 0
let mayorGasto = 0
let nombreMayorGasto = String ('')

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let datoNombre = nombre.value;
    let datoGasto = Number(gasto.value);
    clientes ++;
     if (datoGasto>mayorGasto){
        mayorGasto = datoGasto;
        nombreMayorGasto = datoNombre;
    }
    acumuladorGastos += datoGasto;
});
total.addEventListener("click", function() {
    let porcentajeTotal = acumuladorGastos/clientes;
    alert('La cantidad de clientes que realizaron una compra es de '+ clientes + ' Y el promedio de gasto por persona es de'+ porcentajeTotal);
});

porcentaje.addEventListener("click", function() {
    if (mayorGasto>50000){
        let porcentajeDescuento = 30;
        let descuentoMayor = (mayorGasto*porcentajeDescuento)/100;
        alert('Wow!'+ nombreMayorGasto + 'superó los $50.000, recibirá el doble de descuento!'+ 'Su gastó fue de'+mayorGasto + 'y con el descuento queda en ' + descuentoMayor)
    }else{
        let porcentajeDescuento = 15;
        let descuentoMenor = (mayorGasto*porcentajeDescuento)/100;
        alert(nombreMayorGasto + ' fue superó a todos los otros clientes! Suma un descuento del 15%. Su gastó fue de '+ mayorGasto +  'y con el descuento queda en ' + descuentoMenor)
    }
});
