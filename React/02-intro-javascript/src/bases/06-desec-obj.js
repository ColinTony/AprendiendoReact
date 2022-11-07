// Desestructuracion de Objetos...
// Asignacion desectrurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'IronMan'
};

// si queremos imprimir en consola los parametros 
// tendriamos que poner consol log
// console.log( persona.nombre )
// console.log( persona.edad )
// console.log( persona.clave )

// ASignacion desectructurante

const {nombre , edad , clave } = persona;
// del objeto se extraen las variables que necesitamos.
// se peude asignar un nombre a la variable
// const {nombre:nombrePersona , edad:edadPersona , clave:clave } = persona;

console.log(` Variables ${nombre} ${edad} ${clave}`);

// podemos poner una funcion que nos devuelva 
// las variables
const retornaPersona = ( usuario ) => {
    const { edad, clave, nombre } = usuario;
    console.log(edad, clave , nombre);
}

// Podemos desescturar el objeto desde los parametros
const retornaPersona2 = ( {nombre,edad,clave} ) => {
    const { edad, clave, nombre } = usuario;
    console.log(edad, clave , nombre);
}

// Si no se tiene la varibale podemos asignarla nosotros

const retornaPersona3 = ( {nombre,edad,clave , rango="Capitan"} ) => {
    const { edad, clave, nombre } = usuario;
    console.log(edad, clave , nombre);
}


console.log(retornaPersona(persona));
console.log(retornaPersona2(persona));

console.log(retornaPersona3(persona));

// Podemos hacer lo siguiente
const retornaPersona4 = ( {nombre,edad,clave , rango="Capitan"} ) => ({
    nombreClave: clave,
    anios:edad
});

// si queremos desestrurar el objeto que devulñeve 
// la funcion retornaPersona4

const {nombreClave,anios} = retornaPersona4( persona );

console.log( nombreClave , anios )


// Si dentro del objeto tenemos otro objeto y queremos 
// sacar las variables de dicho objeto podemos hacer lo siguient3

const retornaPersona5 = ( {nombre,edad,clave , rango="Capitan"} ) => ({
    nombreClave: clave,
    anios:edad,
    latlong:{
        lat:12.1231,
        long:14.6534
    }
});
// una manera rapida o simplenete desectrurar el objeto tal cual
//const { nombreClave , anios, latlong:{lat,long}} = retornaPersona5;
