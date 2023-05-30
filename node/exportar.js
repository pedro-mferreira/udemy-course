console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //mudamos para onde ele aponta
console.log(module.exports) //continua a apontar para o mm sitio

exports =  { //mudamos para onde ele aponta
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {publico: true} //este vai ser devolvido