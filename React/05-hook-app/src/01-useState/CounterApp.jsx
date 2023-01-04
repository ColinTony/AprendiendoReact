import { useState } from 'react';

export const CounterApp = () => {

    // en el useState se puede poner hasta objetos
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    });

    const {counter1 , counter2 ,counter3} = state;

    return (
    <>
        <h1 className='h1'>Contador</h1>
            <h2 className='h3'>
                Contador: {counter1}
                
            </h2>
            <h2 className='h3'>
                Contador 2: {counter2}
            </h2>
            <h2 className='h3'>
                Contador 3: {counter3}
            </h2>
 
           <hr/>

            <button className='btn btn-info' onClick=
            {   ()=>{
                    setCounter(
                        {
                            ...state,
                            counter1:counter1+1
                        })
                }
            } > +1 </button>
    </>
    )
}
