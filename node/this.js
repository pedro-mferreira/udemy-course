console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função: ')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    //this.perigo = '....' //estamos a colocar no global
}

//this.perigo = '....' //estamos a colocar no module.exports

logThis()

const logThisArrow =  () => {
    console.log('Dentro de uma função arrow: ')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    console.log(this)
}

logThisArrow()