//usando a notação literal
const obj1 = {}
console.log(obj1)

//object em jes
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto (nome, preco, desconto){
    this.nome = nome,
    this.getPrecoComDesconto = () => {return preco*(1-desconto)}
}

const p1 = new Produto("Cantea", 7.99, 0.15)
const p2 = new Produto("Notebook", 1999, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, salarioBase, faltas, getSalario(){
            return (salarioBase/30 * (30-faltas))
        }
    }
}

const f1 = criarFuncionario("Joao", 1800, 3)
const f2 = criarFuncionario("Maria", 500, 1)
console.log(f1.getSalario(), f2.getSalario())

//object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJSon = JSON.parse('{"info":"Sou um json"}')
console.log(fromJSon.info)