const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const c = require('./pastaC') //podemos pôr só a pasta porque ele procura o index.js automaticamente
console.log(c.ola2)

/*
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
*/

