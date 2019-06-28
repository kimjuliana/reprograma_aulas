const container = document.getElementById('root');
const authors = document.querySelector('.authors');


fetch('https://reqres.in/api/users')
.then((response) => {
    return response.json();
})
.then((infos) => {

    infos.data.forEach(usuario => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.setAttribute('id', usuario.id);
    console.log(infos);
    authors.appendChild(div);

    const nome = document.createElement('h2');
    nome.textContent = usuario.first_name + ' ' + usuario.last_name;
    div.appendChild(nome);

    const email = document.createElement('p');
    email.textContent = usuario.email;
    div.appendChild(email);

    const button = document.createElement('button');
    button.setAttribute('data-id', usuario.id);
    button.textContent = "✖";
    div.appendChild(button);


    button.addEventListener("click", () =>{
        const thisCard = button.parentElement;
        const cardPai = thisCard.parentElement;

        fetch('https://reqres.in/api/users', {
            method: 'DELETE',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": button.getAttribute("data-id")
            })
        })
        .then(() =>{
            cardPai.removeChild(thisCard)

        })
        .catch((erro) =>{
            console.log(erro)

        })
    })
    

    })
})

.catch((erro) => {
    console.log(erro)
})