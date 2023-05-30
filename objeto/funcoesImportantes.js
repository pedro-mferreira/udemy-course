const pessoa = {
    nome: "Pedro",
    idade: 2, 
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //listada na lista de chaves console.log(Object.keys(pessoa))
    writable: false,
    value: '31/10/2001'
})

pessoa.dataNascimento = '1/11/1970'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign
const dest = {a: 1}
console.log(dest)
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(dest, o1, o2, obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)