// operador ... rest (juntar)/spread(espalhar)
//usar rest como parametro de função

//usar spread como objeto
const funcionario = { nome: "Maria", salario: 1234.25 }

const clone = {ativo: true, ...funcionario} //pega todos os atributos do funcionario e junta ao que está

console.log(funcionario, clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafael', ...grupoA]

console.log(grupoFinal)