// desestructuracion de Arreglos

const personajes = [ 'Goku' , 'Vegeta' , 'Trunks' ];
// Digamos que queremos desestructurar al arreglo
const [ p1 ] = personajes; // obtiene el primer elemento
// digamos que queremos el tercer elemento

const [,,p3] = personajes;

console.log(p1);
console.log(p3);


// funcion

const retornarArreglo = () =>{
    return ['ABC',123];
}

const [letras , numeros] = retornarArreglo();
console.log(letras,numeros);

// Tarea

const useState = (valor) =>{
    return [valor, ()=>{console.log('HOLA MUNDO')}];
};

const [nombre,setNombre] = useState('Luis');

console.log( nombre );
setNombre();