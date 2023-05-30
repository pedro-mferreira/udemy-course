let dobro1 = function(a){
    return 2*a
}

let dobro2 = (a) => {
    return 2 * a
}

let dobro3 = a => 2*a

console.log(dobro1(2),
dobro2(2),
dobro3(2))

let ola = function (){
    return 'Olá'
}

let ola2 = () => 'Olá'

console.log(ola(), ola2())