import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    
    const { data , isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/episode/28');
    const { episode , name} = !!data && data;
return( 
    <>
        <h1>RICK AND MORTY</h1>
        <hr/>
        {
            isLoading ? (
                <div className="alert alert-info text-center">
                    Cargando... 
                </div>
            ) 
            :
            (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{data.episode}</p>
                    <footer className="blockquote-footer"> Nombre capitulo : {data.name} </footer>
                </blockquote>
            )
        }
    </>
  )
}
