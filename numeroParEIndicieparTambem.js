// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.



const receberSomenteOsParesDeIndicesPares = array => { 
    let result = []
    for (let index = 0; index < array.length; index++) {
        if ( array[index] % 2 === 0 && index % 2 === 0) {
            result.push(array[index])
        }
    }
  return  console.log(result)
}
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
    
   