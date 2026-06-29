let contenedorImagenees = document.querySelector("#imagenes");
let boton = document.querySelector('#boton')

let obras = [
{
    titulo: 'La consagración de la primavera',
    imagen: 'img/LaConsagracionDeLaPrimavera.jpg'
},
{
    titulo: 'Nadie olvida nada',
    imagen: 'img/NadieOlvida.jpg'
},
{
    titulo: 'Yo, como el ángel',
    imagen: 'img/yo.jpg'
},
{
    titulo: 'Tres días',
    imagen: 'img/tresDias.jpg'
},
{
    titulo: 'El beso en odesa',
    imagen: 'img/elBeso.jpg'
},
{
    titulo: 'Siete últimas canciones',
    imagen: 'img/siete.jpg'
},
{
    titulo: 'El mar dulce',
    imagen: 'img/mar.jpg'
},
{
    titulo: 'Sintitulo -1',
    imagen: 'img/sinTitulo.jpg'
},
{
    titulo: 'Sin titulo',
    imagen: 'img/titulo.jpg'
},
{
    titulo: 'Nadie olvida nada',
    imagen: 'olvida.jpg'
},
{
    titulo: 'Nadie olvida nada',
    imagen: 'nadie.jog'
},

];
let obrasMostradas = 0;
function mostrarObras(){
    let limite = obrasMostradas + 5;
    for (let i = obrasMostradas; i < limite; i++) {
        
        let obraActual= obras[i]
         let estructuraHTML= '<div>';
         estructuraHTML += '<p>'+ obras[i].titulo +'</p>';
        estructuraHTML += '<img src="'+obras[i].imagen + '" alt="' + obras[i].titulo + '">';
        estructuraHTML += '</div>';
        contenedorImagenees.innerHTML += estructuraHTML;

    }
    obrasMostradas = limite;
};
mostrarObras();
boton.addEventListener('click', function(e){
    e.preventDefault();
    mostrarObras();
});
