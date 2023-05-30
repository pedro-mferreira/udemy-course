require('./global')

console.log(MinhaApp.saudacao())
console.log(global.MinhaApp.saudacao())

console.log(MinhaApp.nome)
MinhaApp.nome = "Eita!" //se tiver o freeze nao dá, mas se não o tiver dá
console.log(MinhaApp.nome)