// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

let a = ['a', 4, 3, 3]
const objetoParaArray = objeto => {
     const objetotornouArray = Object.entries(objeto)
    //const objetotornouArray2 = Object.fromEntries(objeto)

    console.log(objetotornouArray)
    

}



objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
 }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
        codigo: 11111,
        preco: 12000
    })