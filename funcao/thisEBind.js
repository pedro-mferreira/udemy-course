const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa) //ao passar o pessoa dizemos que o this la dentro diz respeito a ela 
falarDePessoa()

