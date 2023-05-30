const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: "Pedro",
        idade: 20,
        rua: "Poeta Jose Daniel R costa"
    },
    condutores:[{
        nome: "Joana",
        idade: 21
    }, {
        nome:"Carol",
        idade:28
    }],
    calcularValorSeguro: function(){
        //...
        console.log("Seguro")
    }
}

carro.proprietario.numero= 925199018

console.log(carro)


delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)