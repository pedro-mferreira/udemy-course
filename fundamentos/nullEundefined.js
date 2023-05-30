const a = {name: 'Teste'} //a tem o endenreço apontado para aquele objeto

const b = a //b está a receber o mesmo endereço de a //atribuição por referência

console.log(a, b)

b.name = "Opa"

console.log(a, b)

//------

let c = 3 //como d é um tipo primitivo então a atribuição de baixo é feita por valor
let d = c

d++

console.log(c, d)

//-------------

let valor //nao inicializada

console.log(valor) //undefined, declarada mas sem valor

valor = null //ausência de valor

console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}

console.log(produto.preco) //undefinied
console.log(produto) //objeto vazio

produto.preco = 3.50

console.log(produto) 

produto.preco = undefined //evitar atribuir undefined

console.log(produto) 

produto.preco = null //sem preço

console.log(produto) 