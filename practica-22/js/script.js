let cuerpo =document.querySelector ('div')
let saludo = document.querySelector ('p#despedida')
let bienvenida = confirm('¿Queres personalizar la bienvenida?')
if (bienvenida) {
  let nombre = prompt('¿Cuál es tu nombre?','completá aquí');
let titulobienvenida = document.querySelector('#Bienvenida');
titulobienvenida.innerText = 'Hola ' + nombre;
}

let oscuro = confirm('¿Deseas cambiar el estilo a modo oscuro?')
if (oscuro) {
    cuerpo.style.backgroundColor = 'darkmagenta';
    cuerpo.style.color = 'pink'
}

let hora = Number (prompt('¿Que hora es en el momento que está leyendo esta página?',' '))
switch(true){
  case (hora >= 4 && hora <= 11): 
    saludo.innerText = 'Que tengas un lindo día.';
    break;
    case (hora >= 12 && hora <= 19):
    saludo.innerText = '¡Buenas tardes!';
    break;

  case (hora >= 20 || hora <= 3): // Usamos || (O) porque la hora puede ser mayor a 20 O menor a 3
    saludo.innerText = 'Buenas noches, ¡que descanses!';
    break;

  default:
    saludo.innerText = 'Hora no válida.'; // Por si ingresan un número que no existe (ej. 25)
    break;
}