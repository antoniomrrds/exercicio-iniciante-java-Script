// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// (0, 7) // retornará 0




const somaMulti = (numero1, numero2) => {
    if (numero1 <= 0 && numero2 <= 0 ) { 
        return console.log('Digite o Numero maior que 0 !!! ')
    }
    let soma =0;
    for (let i = 1; i <= numero2; i++){
         soma += numero1
    }
    console.log(soma)
 

}


somaMulti(5,5)