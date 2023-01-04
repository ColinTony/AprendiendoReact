import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    
    // funcion para cmabiar el estado
    const onInputChange = ({target}) =>{
        const {name , value} = target;
        setFormState({
          ...formState,
          [ name ] : value,
        });
      }
    const onResetForm = ({target})=>{
        
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}
