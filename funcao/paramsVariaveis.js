function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(3,4,5))
console.log(soma(3.2,5.5))
console.log(soma("Asds"))
console.log(soma(1.1,2.3,"Teste"))
console.log(soma("a", "b", "c"))