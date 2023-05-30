class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Pedro")
p1.falar()

const criarPessoa = nome => {
    return{
        falar: ()=> console.log("Meu nome é", nome)
    }
}

const p2 = criarPessoa("Pedro")
p2.falar()

////

function Pessoa1(nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa1("Pedro")
p3.falar()