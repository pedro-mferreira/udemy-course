Array.prototype.filter2 = function(callback){
    const newArray = []
    this.forEach((e, i, arr) => {
        if(callback(e, i, arr)){
            newArray.push(e)
        }
    })
    return newArray
}

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de vidro", preco: 12.49, fragil: true},
    {nome: "copo de plástico", preco: 18.99, fragil: false}
]

const fragil = p => p.fragil //== true
const caro = p => p.preco > 500

console.log(produtos.filter2(fragil).filter2(caro))
