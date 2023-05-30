const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de vidro", preco: 12.49, fragil: true},
    {nome: "copo de plástico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2400
}))

const fragil = p => p.fragil //== true
const caro = p => p.preco > 500

console.log(produtos.filter(fragil).filter(caro))
