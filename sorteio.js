// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
// Exemplos:

const funcaoDaSorte = number => {
    if (number <= 0 || number  > 10) { 
        return console.log(`Digite um Número no intervalo de 1 a 10 por favor Este não e valido ${number} !!!! `)
    }

    const max = 10
    const min = 1
    const fator = max- min + 1
    const aleatorio = parseInt(Math.random() * fator) + min

    if (number === aleatorio) {
        console.log(`"Parabéns! O número sorteado foi o ${aleatorio}"`)
    } else (
        console.log(`"Que pena! O número sorteado foi o ${aleatorio}". E o seu e ${number}`)
    )
}


funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
funcaoDaSorte(4)
funcaoDaSorte(1)