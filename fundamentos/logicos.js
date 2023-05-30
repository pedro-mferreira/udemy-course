function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2) bitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log("fiz os dois", compras(true, true))
console.log("fiz só um", compras(true, false))
console.log("fiz só um", compras(false, true))
console.log("n fiz nenhum", compras(false, false))