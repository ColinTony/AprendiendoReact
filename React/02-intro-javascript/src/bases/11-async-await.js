// // ASync and await
// // Fetch API
// const apiKey = "XxLyWyM4dXydMuU1H6y77KZVxmOm6cWf";


// // esto viene ya en el navegador WEB
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);

// // usando el async se vuelve una promesa
// const getImage = async () => {
//     return peticion;
// };

// getImage().then( console.log ); 

// // el wait funcionara para poder ahcerlo sincrtono trodo el codigo.
// Fetch API
// const apiKey = "XxLyWyM4dXydMuU1H6y77KZVxmOm6cWf";

// // esto viene ya en el navegador WEB
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);

const getImage = async() => {
    try{
        const apiKey = "XxLyWyM4dXydMuU1H6y77KZVxmOm6cWf";
        // esto viene ya en el navegador WEB
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);
        // el await espera a que termine el fetch
    
        const {data} = await peticion.json();
        console.log(data);  
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(e){

    }
};
getImage();
// Para manejar errores usamos el try y catch
// peticion.then(resp => resp.json()
//     .then(({data}) => {
//         const { url } = data.images.original;
//         console.log(url);

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     }))
//     .catch(console.warn);
