console.log("Hola mundo")

// Empezando js
// Variables y Constantes

// var ya no se ocupa.
// const : variables que no cambian ni renombran.
// let : variables que si cambion

const nombre = "Luis";
const apellido = "Colin";

let valorDado = 5;
valorDado = 4;

// esta variable solo existe en el scope
// tambien funciona con las constantes
if(true)
{
    let valorDado =  6;
    console.log(valorDado+" -- > Scope ");
}

console.log(nombre,apellido,valorDado);