// un hook solo es una funcion que regresa algo.

import { useEffect, useState } from "react";
import { getGifsForSearch } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Funcion que se encargara de obtener las imagenes
    // de manera async
    const getImagenes = async () => 
    {
        const newImages = await getGifsForSearch( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    // UseEffect : hook para dispara efectos secundarios.
    // cuando algo cambie quiero disparar un efecto
    useEffect( ()=>{
        getImagenes();
    }, []);

    return {
        images,
        isLoading
    }
}
