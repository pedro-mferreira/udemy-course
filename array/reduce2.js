const alunos = [
    { nome: "João", nota: 7.3, bolsista: false},
    { nome: "Maria", nota: 9.2, bolsista: true},
    { nome: "Pedro", nota: 9.8, bolsista: false},
    { nome: "Ana", nota: 8.7, bolsista: true}
]



//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (anterior, atual) =>{return anterior && atual}
const resultado = alunos.map(e => e.bolsista).reduce(todosBolsistas)
console.log(resultado)

//Desafio 2: Algum dos alunos são bolsistas?

const algumBolsista = (anterior, atual)=>{return anterior || atual}
const resultado2 = alunos.map(e => e.bolsista).reduce(algumBolsista)
console.log(resultado2)