export const getGifsForSearch = async ( busqueda ) =>{
    const api_key='Ty7gJs3PPGwURWESKREpWxWqvGipPVZB';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${busqueda}&limit=10&offset=0&rating=g&lang=en`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );
    return gifs;
};