// Componente de REACT
import { useState } from 'react'; // esto es un Hook
import PropTypes from 'prop-types';
import './styles.css'

export const CounterApp = ( {value} ) => {

    const [counter , setCounter ] = useState(value);

    const handleAdd = (event) => {
        console.log('+1');
        setCounter( counter+1 );
    }
    const handleSubtract = (event) => {
        console.log('+1');
        setCounter( counter-1 );
    }
    const handleReset = (event) => {
        console.log('+1');
        setCounter( value );
    }

    return (
    <>
        <h1> CounterApp </h1>
        <h2> {counter} </h2>


        <button onClick={handleAdd}> 1+ </button>
        <button onClick={handleSubtract}> 1- </button>
        <button onClick={handleReset}> reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
