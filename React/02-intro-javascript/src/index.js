// Funciones

// Ya no hacemos de esta forma 
/*
function saludar ( nombre ) {
    return `Hola ${nombre}`;
}
*/
const saludar = function( nombre ) {
    return `Hola ${nombre}`;
}
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}


const saludar3 = ( nombre ) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo `;

// si queremos regresar un objeto podemos usar () encerrando al objeto
const saludar5 = () => ({
    uid:'ADSA',
    user:'nombre',
});



// Las funciones de flecha tiene varias ventajas como el 
// solo usar la flecha para retornar cosas
console.log(saludar('goku'));
console.log(saludar2('goku2'));
console.log(saludar3('goku3'));
console.log(saludar4());

// TAREA
// transformar a funcion de fecha
// Tiene que retornar un objeto implicito
// pruebas
function getUsuarioActivo( nombre ){
    return {
        uid:'ABS',
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('Colin');

console.log(usuarioActivo);

// TAREA RESULTa
const tarea = ( nombre ) =>({
    uid:'ABS',
    username:nombre
});

console.log(tarea('nombre'));