const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__) //aceder ao pai 
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //o prototipo deste é null

function MeuObjecto() {}
console.log(typeof Object, typeof MeuObjecto)
console.log(Object.prototype, MeuObjecto.prototype)