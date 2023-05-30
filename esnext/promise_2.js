/*setTimeout(function (){
    console.log("executando callback 1")

    setTimeout(function(){
        console.log("executando callback 2")

        setTimeout(function(){
            console.log("executando callback 3")

        }, 2000)
    }, 2000)
}, 2000)*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Chamou o resolve")
            resolve("dados")
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor())
