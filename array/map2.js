const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//devolver array só com os preços
const carrinhoArrayObj = carrinho.map(elemento => JSON.parse(elemento)).map(elemento => elemento.preco)
console.log(carrinhoArrayObj)