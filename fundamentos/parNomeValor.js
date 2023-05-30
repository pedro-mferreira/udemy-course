const saudacao = "Opa"

function exec(){
    const saudacao = "Olaaaa"
    return saudacao
}

//objetos sao grupos de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        rua: "Rua principal",
        numero: 114
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)