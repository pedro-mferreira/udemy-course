const nums = [1,2,3,4,5]


const resultado = nums.map(function(e) {
    return e * 2
})
const numsx2 = nums.map(num => num * 2)

console.log(nums, numsx2, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `${e}€`

resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado2)