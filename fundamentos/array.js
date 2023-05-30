const variavel = [0.1, 0.3, 0.7, 6.7, 3.5]

console.log(variavel[0], variavel[4], variavel[7])

//variavel[7] = 12

console.log(variavel[7])
console.log(variavel)

variavel.push(6)

console.log(variavel)

variavel.push({id:3}, false, null, "teste")

console.log(variavel)

console.log(variavel.pop())
console.log(variavel)

delete variavel[0]

console.log(variavel)