
function imprimirSoma(numero1, numero2){
    console.log(numero1 + numero2)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(3,4,5,6,6)
imprimirSoma()

function soma(a = 1, b = 0){
    return a+b 
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
console.log(soma(2,4,5,6,))