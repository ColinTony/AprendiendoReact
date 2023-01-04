import { useState } from "react"

export const useCounter = (init = 10) => {
  
    const [counter, setCounter] = useState(init);
    
    const increment = (value=1) =>{
        setCounter(counter+value);
    };

    const decrement = (value=1) => 
    {
        if((counter-value) < 0) return;
        setCounter( counter - value);
    }

    const reset = ()=>
    {
        setCounter(10);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}
