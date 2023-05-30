const notas = [6, 1, 5, 6, 7, 8, 10]
for(indice in notas){
    console.log("valor = ", notas[indice])
}

const pessoa = {
    nome: "Pedro",
    idade: 20,
    mes: "outubro",
    rua: "poeta jose daniel",
    numero: 113
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}