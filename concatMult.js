
//Concactenadodor de String multiplicado pe
const concatMult = (word, el) => {
    if (word.length == 0 || !word.trim()) {
        return 'Digite uma Palavra !!!'
    }
    else {
        let res = ''
        Array.from({ length: el }, n => res += word)
        return (el == undefined || el == 0) ? wordStr : res
    }
}

console.log(concatMult('antonio', 2))
console.log(concatMult('', 2))
