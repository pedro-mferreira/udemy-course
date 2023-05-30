// Função em JS é FIrst Class Object
//Higher order function

// criar de forma literal

function funcao1(){}

//armazenar numa variável
const funcao2 = function () {}

//armazenar num array
const array = [function (a,b) {return a+b }, funcao1, funcao2]

console.log(array[0](2,3))

//armazenar num atributo de objeto
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

//Passar função como param
function run(funcao){
    funcao()
}

run(function () {return console.log("Executando.. ")})


//Uma função pode retonar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)