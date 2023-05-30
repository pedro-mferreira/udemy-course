console.log(soma(3,4))
//console.log(sub(3,4))
//console.log(mult(3,4))

//function declaration -- desta forma a função é carregada antes de tudo por isso podemos chamá-la antes
function soma(x, y){
    return x + y
}

//function expression -- neste caso já não
const sub = function (x, y){
    return x - y
}

//named function expression -- comportamento igual
const mult = function mult(x,y){
    return x * y
}