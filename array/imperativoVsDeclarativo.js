const alunos = [
    {nome: "Pedro", nota: 7.9},
    {nome: "Joana", nota: 8.1}
]

//Imperativo -- o como conta mais do que o que é feito
let total1 = 0
alunos.forEach(aluno => total1 += aluno.nota)
console.log(total1 /alunos.length)

//Declarativa -- o que é feito vale mais do que a forma como é feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 /alunos.length)

//sql é declarativa, quando fazemos uma consulta nao estamos preocupados com a forma como o resultado vai ser obtido