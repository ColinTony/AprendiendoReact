// Obhjetos literales
// tambien conocidos como diccionarios y trabjan con pares de valores
const persona = {
    nombre: 'Colin',
    apellido: 'Heredia',
    edad: 21,
    direccion:{
        ciudad: 'Mexico',
        zip: 21312,
        lat: 14.4231,
        lng: 34.9834
    }
};

// basicamente estamos creando un objeto 
// que tiene como valor nuestro objeto creado arriba
console.log( {persona :persona} );

console.log(persona);

console.table(persona);


// podemos crear mas personas
const persona2 = persona;
persona2.nombre = 'Peter'; // modifica el objeto en direccion de memoria


console.log(persona);
console.log(persona2);

// para poder hacer lo que queremos es 
// con esto ahora si estamos haciendo una copia de persona
// con la posibilidad de afectar sus campos sin alerar al de persona
const persona3 = { ...persona };

persona.nombre="Colin";
persona2.nombre="Colin2";
persona3.nombre="Colin3";

console.log(persona);
console.log(persona2);
console.log(persona3);


