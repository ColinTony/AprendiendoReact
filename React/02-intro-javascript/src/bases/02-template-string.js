// Template string 
const nombre = "Luis";
const apellido = "heredia";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hola ${nombre} ${apellido}`;
// el uso de `` back ticks nos ayudara para concatenenar Strings
// con variables y ademas esta detecta los caracteres como espaci y enter o saltos de linea

// function PAra devolver el saludo
function getSaludo(nombreCompleto){
    return 'Hola ' + nombreCompleto;
}

console.log(`Hola ${getSaludo(nombreCompleto)}`);