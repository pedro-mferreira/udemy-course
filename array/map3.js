Array.prototype.map2 = function(callback){
    const newArray = []
    this.forEach((e, i, arr) => newArray.push(callback(e, i, arr)))
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//devolver array só com os preços
const carrinhoArrayObj = carrinho.map2(elemento => JSON.parse(elemento)).map2(elemento => elemento.preco)
console.log(carrinhoArrayObj)