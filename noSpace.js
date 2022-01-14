let text = ''

const empty = value =>{
    if(typeof value == 'string' && !value.trim()){
        console.log('vazio')
        return true
    }else{
        console.log('nao esta vazio')
        return false 
    }
}

empty(text)
   

const nothingSpace = (str) => {
    const regex = RegExp(`\\S`, 'gi')
    const result = regex.test(str)
    return result
}


console.log(nothingSpace(text))

