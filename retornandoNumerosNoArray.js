// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

const filtrarNumeros = (array) => {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] === 'number') {
            result.push(array[index])
        }
    }
    console.log(result)
}




filtrarNumeros(["Javascript", 1, "3", "web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []