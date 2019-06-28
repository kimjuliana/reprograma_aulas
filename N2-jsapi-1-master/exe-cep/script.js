const cep = document.getElementById("cep"); //pegando o elemento cep html
console.log(cep.value) //escrevendo no console o valor do cep

cep.addEventListener("focusout", () =>{
    console.log("FOCUS OUT")
    let cepVal =  cep.value
    fetch('https://viacep.com.br/ws/' +  cep.value + '/json') //esperar a url

    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //Pode usar os dados da API

        console.log(data)
        console.log(data.cep)
        document.getElementById("estado").value = data.uf;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("endereco").value = data.logradouro;
        // let estado = document.getElementById('estado');
        //     estado.value = data.uf;

        // let cidade = document.getElementById('cidade');
        //     cidade.value = data.localidade;

        // let bairro = document.getElementById('bairro');
        //     bairro.value = data.bairro;

        
        //     let endereco = document.getElementById('endereco');
        //     endereco.value = data.logradouro;
        
})
    .catch(function(erro){
        console.log(erro)
})

})