const fs = require('fs')

const produto = {
    nome: "Telemovel",
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoNovo.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})