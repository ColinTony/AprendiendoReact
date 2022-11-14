import { useEffect, useState } from "react";
import { getGifsForSearch } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( {category} ) => {


    const [images, setImages] = useState([]);
    // Funcion que se encargara de obtener las imagenes
    // de manera async
    const getImagenes = async () => 
    {
        const newImages = await getGifsForSearch( category );
        setImages(newImages);
    }
    // UseEffect : hook para dispara efectos secundarios.
    // cuando algo cambie quiero disparar un efecto

    useEffect( ()=>{
        getImagenes();
    }, []); 

    return (
        <>
            <h3>{ category }</h3>       
            <div className="card-grid">
                {
                    images.map( (img) => {
                        <GifItem 
                            key={img.id} 
                            { ...img }
                        />
                    })
                }
            </div>
        </>
    )
};
