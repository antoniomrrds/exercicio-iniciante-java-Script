// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const NumerosEmUmIntervalo = function (inicio, fim) {
    let inicioProg = inicio
    let fimProg = fim
    let result;
    if (inicio > fim) {
        inicioProg = fim
        fimProg = inicio
    }
    let arrayNumeroImpares = []
    for (inicioProg; inicioProg <= fimProg; inicioProg++) {
        if (inicioProg % 2 == 1) {
            arrayNumeroImpares.push(inicioProg)
        }

    }
    console.log(arrayNumeroImpares)
}
NumerosEmUmIntervalo(100, 0)