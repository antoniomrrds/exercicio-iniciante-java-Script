// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

const repetirNumeros = numerosVezes => { 
    let elem =""
    let simb = "+"
    for (let index = 0; index < numerosVezes; index++) {
        elem  += simb
        
    }
    console.log(elem)
}
repetirNumeros(5)