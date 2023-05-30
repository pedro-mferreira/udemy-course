
function criarProduto(nome, preco){
    return{
        nome,
        preco, 
        desconto: 20
    }
}

console.log(criarProduto("iphone 11", 599))
console.log(criarProduto("iphone 12", 699))