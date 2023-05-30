function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade) //this sem o bind nao aponta para a pessoa
    }/*.bind(this)*/, 1000)
}

new Pessoa 

function Pessoa1(){
    this.idade = 0
    //const self = this
    setInterval(function(){
        this.idade++
        console.log(this.idade) //this sem o bind nao aponta para a pessoa
    }.bind(this), 1000)
}