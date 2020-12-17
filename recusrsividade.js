function NumeroFatorial(n) {
    if (n == 0) {
        return 1
    }
    else { 
        return n * NumeroFatorial(n-1)
    }


}
console.log(NumeroFatorial(r) )