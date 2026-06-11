const contenedorResultado = document.querySelector("#resultado");
const preguntas = [
    "¿De qué color es el caballo blanco de San Martín?",
    "¿Cuántos lados tiene un triángulo?(escribelo en número)"
];
const respuestasCorrectas = [
    "blanco",
    "3"
];
let contador = 0; 
for (let i = 0; i < 2; i++) {
    let respuestaUsuario = prompt(preguntas[i]);
    if (respuestaUsuario === respuestasCorrectas[i]){
        alert('La respuesta es correcta! Sigue así :)');
            contador++;
        
    }
    else {
      alert('La respuesta es incorrecta :(')
    }
}
contenedorResultado.innerText = ` 
La cantidad de respuestas correctas fue de: ${contador}.`
