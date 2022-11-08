// el div nos sirve para englobar elementos y porder retornarlos
// entonces hay una forma de retornar elementos
// devemos importar el Fragment el cual quita el div
// el Fragment no lo crewa en el HTML

// pero hay una forma mas para hacerlo podemos regresar <> ejemplo
// Siempre debemos tener un nodo padre

// export const FirstApp = () => {
//   return (
//     <>
//       <h1>Colin</h1>
//       <p>Soy un subtitulo</p>
//     </>
//     );
// };
// estilo global
import './styles.css'
// Si queremos que devulva un objeto simplemente
// JSON.stringify(objeto)
import PropTypes from 'prop-types';

const newMensaje = 123;
const arreglo = [1,2,3,4,5,6];
// Nosotros podemos imprimir variables con {}
export const FirstApp = ( {titulo,subtitulo} ) => {
 
  // las properties son variables o argumentos
  // normalmemnte se desestructuran para usar sus variables.
  // (props : "Hola") // podemos tener valores por defecto
  //console.log(props);

  // Tipos de propierties


  // react permite usar eslitlos
  // para nosotros usar esto debemos importarlo arriba

  return (
    <>
      <h1>{titulo}</h1>
      <h1>{subtitulo}</h1>
    </>
    );

};
// Ahora esta mejor tipado
// aunque por defecto podemos mandar tambien valores
FirstApp.prototype = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired
};

// Defaults
FirstApp.defaultProps = {
  titulo: 'No hay titulo',
  subtitulo: 'no hay subtitulo'
}