// Funciones comunes en Js , exports,Imports

// maneras de importar 
//import { heroes } from './data/heroes';
import heroes , {owners} from '../data/heroes';

//console.log(heroes);

// Si nosotros queremos ver el contenido de Heroes.js
// debemos usar el export en el archivo, asi nosotros vamos a poder
// exportarlo.

export const getHeroeById = (id) => heroes.find( (heroe) => (heroe.id === id)); // Busca un elemento por el id

export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => (heroe.owner === owner)); // Busca un elemento por owner

//const getHeroeById = (id) => heroes.find( (heroe) => (heroe.id === )); // Busca un elemento por el id

//console.log( getHeroeById(2) );

//console.log( getHeroeByOwner("DC") );
