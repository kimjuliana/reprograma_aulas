const stickers = document.querySelector('.stickers');
const button = document.querySelector('.btn-search-sticker');

button.addEventListener('click',(evento) =>{
    evento.preventDefault();
    stickers.innerHTML = " "

    fetch(`https://api.giphy.com/v1/stickers/search?q=${sticker.value}&api_key=6YYYGfJEN94R5kbA0eimi8NmlXPhfhJu`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        data.data.forEach(gif =>{
            const div = document.createElement ('div')
            div.setAttribute('class', 'card');
            div.setAttribute('data-id', gif.id);
            stickers.appendChild(div);
        
        let image = document.createElement('img');
        image.setAttribute('src', gif.images.original.url);
        div.appendChild(image);
        console.log(data);
    })
    
})
    .catch((erro) => {
        console.log(erro);
    })
} )
