// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

const firstLast = (array) => {
    const fl = Array.from(array)
    const result = []
    result.push(fl[0]) && result.push(fl[fl.length - 1])
    console.log(result)
 }
firstLast(([7, 14, "olá"]))



 


