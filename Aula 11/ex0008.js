var vel = 101
console.log(`A velocidade do seu carro é ${vel}Km/h `) 
if (vel > 60) { // Condição Simples
    console.log(`Você utrapssou a velocidade permitida. MULTADO`)
}
switch (vel > 60) {
    case (vel > 60 && vel <= 80):
        console.log('Multa leve')
        break
    case (vel > 80 && vel <= 100):
        console.log('Multa mediana')
        break
    case (vel > 100 && vel <= 130):
        console.log('Multa grave')
        break
    case (vel > 130):
        console.log('Multa gravissíma')
        break 
}
console.log(`Dirija sempre usando cinto de segurança!`) 