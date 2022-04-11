// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.
// Exemplos:



// const despesasTotais = objeto => {
//     let result  = 0;
//     for (let index = 0; index < objeto.length; index++) {
//          result += objeto[index].preco;
//     }
//    return console.log(result)
// }


let despesasTotais = ([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99

 despesasTotais = ([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89

    

// const number = [1, 2, 6, -1, -8, 6, -7]

const somatorioPreco = despesasTotais
let result = 0;
somatorioPreco.filter((element) =>  result += element.preco)
const resultado = result
console.log(resultado)


// const acumulador = number
// const soma = (acumulador,elementoAtual) =>  acumulador + elementoAtual
//  const valor = acumulador.reduce(soma)
// console.log(valor)
    


// const number = [-10, 10]
// const acumulador = number
// const soma = (acumulador,elementoAtual) =>  acumulador + elementoAtual
// console.log(acumulador.reduce(soma))


