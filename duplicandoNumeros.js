// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.
const repetirString = (palavraRepetir,numVezesRepetir) => {
    let elem = []
    for (let index = 0; index < numVezesRepetir; index++) {
       
        elem.push(palavraRepetir)
         
    }
    console.log(elem)
}
repetirString(7,1)