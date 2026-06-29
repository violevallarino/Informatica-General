let listadoCorredores = [];
let inputNombre = document.querySelector('#nombre');
let inputApellido = document.querySelector('#apellido');
let inputEdad = document.querySelector('#edad');
let inputNumeroCorredor = document.querySelector('#numeroCorredor');
let inputTiempo = document.querySelector('#tiempo');

let btnGuardar = document.querySelector('#btnGuardar');
let btnResultados = document.querySelector('#btnResultados');

let formulario = document.querySelector('#formularioCorredores');
let divResultados = document.querySelector('#resultados');
let divGanador = document.querySelector('#ganador');
let divPromedio = document.querySelector('#promedio');
let divPorcentaje = document.querySelector('#porcentaje');

function validarFormulario() {

    if (inputNombre.value === '' || inputApellido.value === '' || inputEdad.value === '' || inputNumeroCorredor.value === '' || inputTiempo.value === '') {
        alert('Por favor completá todos los campos');
        return false;
    }

    return true;
}

function guardarCorredor() {
    if (validarFormulario() === false) {
        return;
    }

    let corredor = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        edad: inputEdad.value,
        numeroCorredor: inputNumeroCorredor.value,
        tiempo: Number(inputTiempo.value)
    };
      listadoCorredores.push(corredor);
      inputNombre.value = '';
    inputApellido.value = '';
    inputEdad.value = '';
    inputNumeroCorredor.value = '';
    inputTiempo.value = '';

    alert('Corredor guardado. Van ' + listadoCorredores.length + ' de 4.');

    if (listadoCorredores.length === 4) {
        btnResultados.style.display = 'inline';
    }
}

    alert('Corredor guardado. Van ' + listadoCorredores.length + ' de 4.');
    if (listadoCorredores.length === 4) {
        btnResultados.style.display = 'inline';
    }


function mostrarGanador() {
    let ganador = listadoCorredores[0];
    listadoCorredores.forEach(function(corredor) {
        if (corredor.tiempo < ganador.tiempo) {
            ganador = corredor;
        }
    });
     divGanador.innerHTML = 
        '<h3>🏆 Ganador</h3>' +
        '<p>Nombre: ' + ganador.nombre + ' ' + ganador.apellido + '</p>' +
        '<p>Edad: ' + ganador.edad + '</p>' +
        '<p>Número de participante: ' + ganador.numeroCorredor + '</p>' +
        '<p>Tiempo: ' + ganador.tiempo + ' minutos</p>';
}
function calcularPromedio() {
    let sumaTiempos = 0;
     listadoCorredores.forEach(function(corredor) {
        sumaTiempos = sumaTiempos + corredor.tiempo;
    });
    let promedio = sumaTiempos / listadoCorredores.length;
    divPromedio.innerHTML = '<p>Promedio de tiempo: ' + promedio + ' minutos</p>';
 return promedio;
};
function calcularPorcentaje() {
    let promedio = calcularPromedio();
    let cantidadMasRapidos = 0;
    listadoCorredores.forEach(function(corredor) {
        if (corredor.tiempo < promedio) {
            cantidadMasRapidos = cantidadMasRapidos + 1;
        }
    });
    let porcentaje = (cantidadMasRapidos / listadoCorredores.length) * 100;
    divPorcentaje.innerHTML = '<p>El ' + porcentaje + '% de los corredores fue más rápido que el promedio</p>';
};
btnGuardar.onclick = guardarCorredor;

btnResultados.onclick = function() {
    formulario.style.display = 'none';
    divResultados.style.display = 'block';
      mostrarGanador();
    calcularPorcentaje();
};