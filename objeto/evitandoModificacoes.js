//Object.preventExtensions -- nao deixa aumentar o numero de atributos no objeto
const prod = Object.preventExtensions({
    nome: "iphone",
    preco: 499,
    tag: "promoção"
})

console.log('Extensível:', Object.isExtensible(prod))

prod.nome = 'Borracha' //podemos alterar
prod.descricao = 'Borracha escolar branca' //nao podemos acrescentar
delete prod.tag //podemos apagar
console.log(prod)

//Object.seal //dá para modificar - nao da para apagar nem para adicionar
const pessoa = { nome: "Pedro", idade: 20}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = "Ferreira"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = nao da para fazer nada, nem modificar, nem apagar, nem adicionar