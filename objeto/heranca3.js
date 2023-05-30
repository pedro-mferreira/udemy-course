const pai = { nome: "Pedro", corCabelo: "Preto"}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "Bia", writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome="Carla"
console.log(filha2.nome, filha2.corCabelo)

console.log("Keys filha 1", Object.keys(filha1))
console.log("Keys filha 2" , Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(key) : console.log(key, " - Por herança")
}