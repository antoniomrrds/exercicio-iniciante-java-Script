// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.
// Exemplos:

const removerVogais = palavra => {
    let myRegex = /[^aeiou]/gi;
    let fraseRegex = palavra.match(myRegex).join('')
 
    console.log(fraseRegex )
}
removerVogais("Cod3rererr") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"