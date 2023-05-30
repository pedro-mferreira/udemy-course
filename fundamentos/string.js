const escola = "Pedrocas"

console.log(escola.charAt(4))
console.log(escola.charAt(8)) //devolve vazio 
console.log(escola.charAt(3)) 

console.log(escola.charCodeAt(3)) //devolve codigo ascii

console.log(escola.indexOf('P')) //indice da letra P

console.log(escola.substring(3)) // a partir do indice 3
console.log(escola.substring(0,3)) // 0 ao 3 exclusive

console.log("escola ". concat(escola).concat("!"))


console.log(escola.replace("P", "I"))

console.log('Ana, Maria, Pedro'.split(","))