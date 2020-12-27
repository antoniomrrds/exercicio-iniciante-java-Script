// Escreva uma função que receba um array de números e retornará a soma de todos os números desse numeros.
// Exemplos:
const somarNumeros = numeros => {
    if (numeros == '') { 
       return console.log("Digite um array de numeros")
    }
    let element = null
    for (let index = 0; index < numeros.length; index++) {
        element += numeros[index]
    } 
  return  console.log(element)
}
somarNumeros([-10, 10])// retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60

// //progamacao funcional

const number = [-10, 10]
const acumulador = number
const soma = (acumulador,elementoAtual) =>  acumulador + elementoAtual
console.log(acumulador.reduce(soma))



