// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:


const segundoMaior = array => {
    const arrayCrescente = array.sort((a, b) => a - b)
    return console.log(arrayCrescente[ arrayCrescente.length-2])
}
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6