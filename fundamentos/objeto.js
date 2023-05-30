const prod1 = {}

prod1.nome = 'Telemovel'
prod1.preco = 3999
prod1['Desconto fixolas'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Polo',
    preco: 80
}

console.log(prod2)

//diferente de json 
//json é assim

'{"nome": "Polo", "preco":80}'

console.log(JSON.parse('{"nome": "Polo", "preco":80}')) //converter json para object
console.log(JSON.stringify(prod2)) //object para json