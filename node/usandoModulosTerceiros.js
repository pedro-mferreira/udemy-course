//Vamos usar o lodash aqui
const _ = require('lodash') //aqui procura no node_modules e depois procura o index.js

setInterval( () => console.log(_.random(50, 60)), 2000)