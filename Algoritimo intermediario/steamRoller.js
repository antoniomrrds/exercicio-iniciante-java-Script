function steamrollArray(arr) {
    let str  = arr.toString();
    const regex = /\d/gi
    const strTest = regex.test(str) 
    const arrayStr = str.trim().split(",");
    if(!strTest){
      return arrayStr
    }
    const  noArray = arrayStr.filter(n => !n =="");
    const itsNotANumber=num=> !parseFloat(num); 
    return noArray.map(n=>(itsNotANumber(n))?n={}:parseFloat(n))
}
const resp = steamrollArray([[["a"]], [["b"]]])
console.log(resp)