const prod1 = {
    nome: "iphone 12",
    preco: 4399
}

const prod2 = {
    nome: "iphone 13",
    preco: 4239
}
//funcoes factory criam novos objetos a partir da sua chamada 
//Factory simples
function criarPessoa(){
    return{
        nome: "Pedro",
        sobrenome: "Ferreira"
    }
}

console.log(criarPessoa())