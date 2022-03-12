
//Concactenadodor de String multiplicado pe
const concatMult = (word,el)=>{
let res =''
let juncao = Array.from({length: el}, n => res += word)
return res || 'ana'
}
console.log(concatMult('ana',2))


