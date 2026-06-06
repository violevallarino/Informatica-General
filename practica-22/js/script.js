let precio = document.querySelector('#precio');
let descuento = document.querySelector('#descuento');
let resultado = document.querySelector('div#resultado');
let boton = document.querySelector('#boton');

function calcular(){
let precioNum = Number(precio.value);
let descuentoNum = Number(descuento.value);
 
let resultadoFinal = precioNum - (precioNum * descuentoNum /100);

resultado.innerText = '<El precio final es de $'+ resultadoFinal ;

}
boton.onclick = calcular;

