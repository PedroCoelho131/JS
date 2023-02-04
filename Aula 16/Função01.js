function parimpar(n) {
    if (n%2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}
let res = parimpar(9)    // poderia ser também console.log(parimpar(4))
console.log(res)