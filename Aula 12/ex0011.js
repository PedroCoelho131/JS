var idade = 69
console.log(`Você tem ${idade} anos de idade`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}

var aposentar = 31
if(aposentar >= 35) {
    console.log('Você pode se aposentar')
}else{
    var f = 35 - aposentar
    console.log(`Você só pode se aposentar em ${f} , por causa que você não tem contribuição suficiente `)
}