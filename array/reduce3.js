Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length ; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 1, 1]
console.log(nums.reduce2(soma, 10))

const alunos = [
    { nome: "João", nota: 7.3, bolsista: false},
    { nome: "Maria", nota: 9.2, bolsista: true},
    { nome: "Pedro", nota: 9.8, bolsista: false},
    { nome: "Ana", nota: 8.7, bolsista: true}
]



//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (anterior, atual) =>{return anterior && atual}
const resultado = alunos.map(e => e.bolsista).reduce2(todosBolsistas)
console.log(resultado)