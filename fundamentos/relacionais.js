console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // se são estritamente iguais - false -tipo diferente
console.log('03)', '3' != 3) //sao iguais
console.log('04)', '3' !== 3) //sao iguais mas tipos diferentes


const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())