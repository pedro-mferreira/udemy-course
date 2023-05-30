function soBoaNoticia(nota){
    if(nota >= 9.5){
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(6)
soBoaNoticia(10)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(1 == 1 )
seForVerdadeEuFalo('')
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
