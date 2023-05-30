const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesasFunc = pessoa => pessoa.genero == 'F' && pessoa.pais == 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const mulherChinesaMenorSalario= funcionarios.filter(mulheresChinesasFunc).reduce(menorSalario)
    console.log(mulherChinesaMenorSalario)
})