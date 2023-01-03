
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {

    const {images , isLoading} = useFetchGifs(category);

     
    // no podemos usar lla palabra class por ello para usar una class de CSS
    // usamos el ClassName
    return (
        <>
            <h3>{ category }</h3>
            {
                // and logico
                isLoading && (<h2> Cargando... </h2>)
            }       
            <div className="card-grid">
                    {
                        images.map((img) => (
                            <GifItem key={img.id} {...img} />
                        ))
                    }
            </div>
            
        </>
    )
};
