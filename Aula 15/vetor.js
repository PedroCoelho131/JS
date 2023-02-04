let valores = [8 , 9, 4, 3, 1]
valores.sort()
/*for (let pos = 0 ; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}