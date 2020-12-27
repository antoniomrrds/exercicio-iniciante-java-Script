// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

const inverso = (inversao) => {
    if (typeof inversao === "number") {
        if (inversao > 0) {
            return console.log(inversao - inversao * 2)
        } else if (inversao <= 0) {
            return console.log(Math.abs(inversao))
        }
    }

    if (inversao === true) {
        return console.log(false)
    } else if (inversao === false) {
        return console.log(true)
    }

    return console.log(`booleano ou números esperado , mas o parâmetro e do tipo ${typeof inversao}`)
}



inverso(-2)