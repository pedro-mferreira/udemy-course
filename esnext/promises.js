function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(frase) //reject no catch - resolve no then
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que fixe!')
    .then(frase => frase.concat('!!!!!!!!!!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
