// vamos a crearr un a aplicacion de gifs

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) =>
    {
        if( categories.includes(newCategory) ) return;
        
        setCategories([ newCategory ,...categories]);
    }
    
    return (
    <>
        {/* titulo */} 
            <h1>GifExpertApp</h1>
            
            < AddCategory
             //      setCategories = {setCategories}
                onNewCategory={ onAddCategory }
            />
                
            
            {
                categories.map( (category) => 
                    <GifGrid 
                        key={ category } 
                        category = { category }
                    /> )
            }

        {/* input */}
        {/* Listado Gif */}
        {/* Gif Item */}
    </>
    );
}
