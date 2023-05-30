const aprovados = ['aprov1', 'aprov2', 'aprov3', 'aprov4',]

Array.prototype.forEach2 = function(fcallback){
    for(let i = 0; i < this.length ; i++){
        fcallback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})
