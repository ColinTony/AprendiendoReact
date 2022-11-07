// Fetch API
const apiKey = "XxLyWyM4dXydMuU1H6y77KZVxmOm6cWf";

// esto viene ya en el navegador WEB
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);

peticion.then(resp => resp.json()
    .then(({data}) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }))
    .catch(console.warn);