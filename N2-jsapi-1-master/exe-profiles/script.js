const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'authors');

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onload = function(){
    const data = JSON.parse(this.response);
    //console.log(data)
    if(request.status >= 200 && request.status < 400){
        console.log("SUCESSO!!")

        data.results.forEach(pessoa => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            let image = document.createElement('img');
            image.setAttribute('src', pessoa.picture.large)
            
            let local = document.createElement('h3')
            local.textContent = pessoa.location.city + ' , ' + pessoa.nat;
          
            let name = document.createElement('h2');
            name.textContent = pessoa.name.first + ' ' + pessoa.name.last;
          
            let email = document.createElement('p');
            email.textContent = pessoa.email;
          
            let phone = document.createElement('p');
            phone.textContent = pessoa.phone;

            container.appendChild(card);
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(local);
            card.appendChild(email);
            card.appendChild(phone);
            
          });
    }else{
        console.log("erro : c")
    }
}
request.send()
   
   
