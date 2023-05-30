const pilotos = ['piloto1', 'piloto2', 'piloto3']
console.log(pilotos)
pilotos.pop() //tira o ultimo
console.log(pilotos)

pilotos.push("pilotoNovo") //mete um novo no fim
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift("outroNovo") //adiciona no primeiro
console.log(pilotos)

//splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'piloto5', 'piloto6') //adiciona 2 no indice 2
console.log(pilotos)

//remover
pilotos.splice(3,1) //retira 1 no indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array tira os dois ultimos
console.log(algunsPilotos1)

console.log(pilotos)
const algunsPilotos2 = pilotos.slice(1,3)
console.log(algunsPilotos2)