let i;
const calculoBasico = (numero, operador) => {
    let b = 2
    return console.log(`${numero} ${operador} ${b} = ` + eval(`${numero} ${operador} ${b}`))
}

let result =0
for (i = 0; i <= 2; i++) {
    result  +=i 
}
 
calculoBasico(result,'**')