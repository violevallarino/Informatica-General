const contenedorResultado = document.querySelector("#resultado");
const listaPrecios = []
let cantidadLibros = Number(prompt("Cuantos libros compraste en la Feria del Libro 2026? ","Ingrese el número aquí)"))
while(isNaN(cantidadLibros)||cantidadLibros<=0){
    cantidadLibros = Number(prompt ('El dato ingresado no es valido, por favor ingresar el dato nuevamente'))   
}
for (let i = 0;i<cantidadLibros; i++){
    let precio = Number(prompt('Ingrese el precio del libro'));
    while(isNaN(precio)||precio<0){
        precio = Number(prompt('Precio inválido. Ingrese el precio nuevamente:'));
    }
    listaPrecios.push(precio)
}
let mayorPrecio = Math.max(...listaPrecios);
let menorPrecio = Math.min(...listaPrecios);
let suma = 0;
for(let i = 0;i <listaPrecios.length;i++){
    suma+=listaPrecios[i];
}
let promedio = suma / listaPrecios.length;

contenedorResultado.innerText = `El total gastado es: $${suma}. 
El libro más caro costó: $${mayorPrecio}. 
El más barato: $${menorPrecio}. 
El promedio es: $${promedio}.`;