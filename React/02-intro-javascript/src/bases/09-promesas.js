// PROMESAS

import { getHeroeById } from './bases/08-exports-imports';

// hasta que termina lo sincrono empieza las promesas.
// const promesa = new Promise ( (resolve , reject) => {
//     setTimeout(() => {
       
//         console.log("2 segundos despues");
//         const heroe = getHeroeById(2);
       
//         resolve( heroe ); // Termina la promesa y avisa al then , manda los argumentos del resolve al then
//         reject( 'No se pudo encontrar el heroe' ); // lo manda al catch si es que huibo error en la promesa
//     }, 2000);
// });

// // para hacer algo cuando la promesa termine.

// promesa.then( ( heroe ) =>{
//     console.log('Then de la promesa');
//     console.log(heroe);
// } ) .catch( err => console.warn( err ));

// Ahora usemos el async

const getHeroeByIdAsync = ( id ) => {
    return new Promise ( (resolve , reject) => {
        setTimeout(() => {
           
            console.log("2 segundos despues");
            const heroe = getHeroeById(200);
            if ( heroe ) resolve(heroe); else reject('No se encontro heroe');
            // resolve( heroe ); // Termina la promesa y avisa al then , manda los argumentos del resolve al then
            // reject( 'No se pudo encontrar el heroe' ); // lo manda al catch si es que huibo error en la promesa
        }, 2000);
    });
    
};

getHeroeByIdAsync(4)
    .then( heroe => console.log('Heroe', heroe) )
    .catch( err => console.log('Error: ' , err) );
// Otra manera de imprimir el argumento recibido


getHeroeByIdAsync(4)
    .then( console.log )
    .catch( console.warn);