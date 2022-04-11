// Minha formula
// const sub =  (n1,n2)=> n1-n2
// const mult =  (n1,n2)=> n1*n2
// const sum =  (n1,n2)=> n1+n2
// const div =  (n1,n2)=> n1/n2

// const calculator = (number1, number2, operator) =>{
//     let result = 0 
//     if(operator == "+" || operator == "-"){
//         result = (operator === "+") ? sum(number1,number2) : sub(number1,number2);
//     }else if (operator == "*"){
//        result = mult(number1,number2);
//     }else if (operator == "/"){
//             result = (number2 == 0)?  "Não e possivel dividir por Zero ": div(number1, number2);
//     }
//     return result;
// }
// forma de resolver mais facil
const calculator = (n1, n2, operator) =>{
    const op = {
        "+":(n1,n2)=> n1 + n2,
        "-":(n1,n2)=> n1 - n2,
        "*":(n1,n2)=>n1 * n2,
        "/":(n1,n2)=>(n2 == 0 )?"Não e possivel dividir por zero":n1 /n2
    }
   
    // return op?.[operator]?.(n1, n2) | 0
    return op?.[operator]?.(n1, n2)
}
const resp =calculator(2, 0,"/")
console.log(resp)

