let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

p.then(function (valor){
    console.log(valor)
})

let p1 = new Promise(function(resolve){
    resolve(['Ana', 'Pedro', 'Bia'])
})

p1.then(valor => valor[0]).then(valor =>valor).then(valor => console.log(valor.toLowerCase()))
p1.then(primeiroElemento).then(primeiraLetra).then(letraMinuscula)

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string
}

function letraMinuscula(string){
    console.log(string.toLowerCase())
}