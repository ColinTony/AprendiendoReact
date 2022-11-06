// ARREGLO
// maneras de inicializar un arreglo
// const arreglo=new Arreglo(1000);

// lo normal es 
const arreglo = [1,2,3,4];
// el push afecta al arreglo principal osea 
// a la direccion de memoria del arreglo

//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

// si queremos hacer copia del arreglo
let arreglo2 = [...arreglo, 5];

// Podemos usar el map el cual tiene muchos metodos y propiedades
// con el map crea un nuevo arreglo y rompe la referencia

// si queremos multiplicar cada uno de esos valores del arreglo2 por 2
// podemos usar el map() 
const arreglo3 = arreglo2.map( function ( numero ){
    return numero * 2;
});
// el codig anterior tambien se pude poner de esta forma
const arreglo4 = arreglo2.map( ( numero ) => {
    return numero * 2;
});



//arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

console.log(arreglo4);


