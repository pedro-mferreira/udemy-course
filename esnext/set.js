//não aceita repetição e não é indexado

const { times } = require("lodash")

const equipas = new Set()
equipas.add('Vasco')
equipas.add('São Paulo').add('Palmeiras').add('Corintians')
equipas.add('Flamengo')
equipas.add('Vasco')

console.log(equipas)
console.log(equipas.size)
console.log(equipas.has('vasco'))
console.log(equipas.has('Vasco'))
equipas.delete('Flamenco')
console.log(equipas.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)