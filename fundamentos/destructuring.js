
const pessoa = {
    nome: "Pedro",
    idade: 20, 
    endereco: {
        rua: "Rua Principal",
        numero: 114,
    },
    sobrenome: "Ferreira",
    bemHumorado: false
}

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {rua, numero, cp}} = pessoa
console.log(rua, numero, cp)

//const {conta: {ag, num}} = pessoa
//console.log(ag, num)