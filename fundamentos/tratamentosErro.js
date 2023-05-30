function tratarErroELancar(erro){
    //throw new Error('Olha há um erro')
    //throw 10 
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{ //executa sempre
        console.log('final')
    }
    
}

const obj = {nome : 'Pedro'}
//const obj = {name : 'Pedro'} -- de forma a dar tudo certo
imprimirNomeGritado(obj)