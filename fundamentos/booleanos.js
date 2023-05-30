let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log("tudo o que é diferente de 0 é verdadeiro ", isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = Infinity //-1 //[] //{}
console.log("tudo o que é diferente de 0 é verdadeiro - ", isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = 0 //'' string  vazia é falso //null tbm é falso //NaN tbm é falso //undefined tbm
console.log("0 é falso")
console.log(!isAtivo)
console.log(!!isAtivo)