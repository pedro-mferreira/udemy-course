const aprovados = ['aprov1', 'aprov2', 'aprov3', 'aprov4',]

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)