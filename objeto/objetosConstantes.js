//pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro' //alteramos o valor deste campo do objeto mas o endereco mantem se

console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} //tentamos que a variavel aponte para um novo endereco

Object.freeze(pessoa) //torna a referencia E o objeto constante, nao permite modificar  

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Joao"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)