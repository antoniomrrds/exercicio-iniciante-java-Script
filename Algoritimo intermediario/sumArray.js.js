function sumAll(arr) {

  let newArr = [...arr]
  if (newArr[0] > newArr[1]) [newArr[0], newArr[1]] = [newArr[1], newArr[0]]

  let resultSum = [];
  for (let i = newArr[0]; i <= newArr[1]; i++) resultSum.push(i)


  let sum = resultSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return sum;

}

let s = sumAll([1, 4]);
console.log(s)