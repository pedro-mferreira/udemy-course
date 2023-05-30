
const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()



//imprime 10 porque o var nao tem scope de bloco 