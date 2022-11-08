import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

// Componentes Basados em funcione
// usualmente esta funcion no esta en el main
// function App() {
//     return (<h1>HOLA MUNDO !!</h1>);
// }
// Con esto creamos un root y el root es el elemento del div de nuestro html
// usamos el modo estricto
// podemos pasarle las propiedades desde la etiquetaa
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 0 } /> 
    </React.StrictMode>
)