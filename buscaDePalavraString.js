// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.
const contarCaractere = (search, phrase) => { 
    let re = new RegExp(search, "g")// regex de busca 
    let result = phrase.match(re)
    console.log(result.length)
}
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1