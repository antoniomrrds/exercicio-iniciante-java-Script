// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// 📕 Considere que todas as palavras só são separadas por um espaço.
// Exemplos:

const contarPalavras = frase => {
    if (frase === "") {
        return console.log("Por favor Digite uma frase !!!")
    }
    
    let cont = 0
    let palavras = 1
 
    phraseWithoutSpaces = frase.trim() //remove espaco inicio e fim !!! 
    //acrescentar o  metodo se tiver mais de 1 espaco 
    for (let index = 0; index < phraseWithoutSpaces.length; index++) {
        if (phraseWithoutSpaces[index] === ' ') {
            cont++
        }
    }
    if (cont == 0) {
        return console.log(`O Número de palavras e igual a ${palavras}`)
    }
    return console.log(`O numero de palavras é : ${cont + palavras}`)
}



contarPalavras("Sou uma frase") // retornará 3
contarPalavras("") // retornará 3
contarPalavras("   a asdasd sadaswd vdasd                    ") // retornará 1
contarPalavras("Me divirto aprendendo a programar") // retornará 5