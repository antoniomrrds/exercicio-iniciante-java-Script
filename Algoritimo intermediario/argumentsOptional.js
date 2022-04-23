const isNumber = n => (parseFloat(n) && typeof n === 'number') ? true : false
function addTogether(n,n2) {
  if (isNumber(n)) {
    if (isNumber(n) && isNumber(n2) || n2 == undefined) {
         return  (isNumber(n) && isNumber(n2)) ?n + n2 : n3 =>  (isNumber(n3))?n + n3: undefined
    }
  }else{
    return undefined
  }
}

const a = addTogether(3)(3)
console.log(a)
