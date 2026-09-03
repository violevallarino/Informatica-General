// 1. Selección de elementos del DOM
const contenedor = document.querySelector('#contenedor-cuadrados');
const btnRojo = document.querySelector('#btn-rojo');
const btnVerde = document.querySelector('#btn-verde');
const btnAzul = document.querySelector('#btn-azul');
const btnNegro = document.querySelector('#btn-negro');
const btnBorrar = document.querySelector('#btn-borrar');

// 2. Función reutilizable para crear y agregar un cuadrado
function agregarCuadrado(color) {
  const nuevoCuadrado = document.createElement('div'); // Crea el elemento en memoria
  nuevoCuadrado.classList.add('cuadrado', color);      // Le asigna la clase base y la del color[cite: 1]
  contenedor.append(nuevoCuadrado);                     // Lo inserta al final del contenedor[cite: 1]
}

// Escuchadores de eventos para agregar cuadrados
btnRojo.addEventListener('click', () => agregarCuadrado('rojo'));
btnVerde.addEventListener('click', () => agregarCuadrado('verde'));
btnAzul.addEventListener('click', () => agregarCuadrado('azul'));

// 3. Función para pintar todos los cuadrados existentes a negro[cite: 1]
function pintarTodosDeNegro() {
  const todosLosCuadrados = document.querySelectorAll('.cuadrado');
  
  todosLosCuadrados.forEach((cuadrado) => {
    // Quita las clases de colores previos para evitar solapamientos
    cuadrado.classList.remove('rojo', 'verde', 'azul');
    // Agrega la clase negro[cite: 1]
    cuadrado.classList.add('negro');
  });
}

// Escuchador de evento para convertir a negro
btnNegro.addEventListener('click', pintarTodosDeNegro);

// 4. Función para vaciar todos los cuadrados agregados[cite: 1]
function borrarTodos() {
  contenedor.replaceChildren(); // Remueve todos los nodos hijos del contenedor[cite: 1]
}

// Escuchador de evento para borrar todo
btnBorrar.addEventListener('click', borrarTodos);