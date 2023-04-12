const agora = new Date();
const  mes = agora.getMonth();
const  dia = agora.getDate();
const  horas = agora.getHours();
const  minutos = agora.getMinutes();
const  ano = agora.getFullYear();
const  segundos = agora.getSeconds();
let  diaSema = agora.getDay();
if (mes == 11 && dia <= 23) {
    console.log(`Faltam ${25 - dia} dias para o natal`)
} else if (mes == 11 && dia == 24 ) {
    console.log(`Falta ${25 - dia} dia para o natal`)
}else if (dia == 25 && mes == 11) {
    console.log(`Hoje é natal`)
}else if (mes != 11) {
    console.log(`Verifique se estamos em Dezembro`)
} else if (mes == 11 && dia > 25) {
    console.log(`Natal já passou`)
}
switch(diaSema)  {
        case 0:
            diaSema = 'Domingo'
            break
        case 1:
            diaSema = 'Segunda-Feira'
            break
        case 2:
            diaSema = 'Terça-Feira'
            break
        case 3:
            diaSema = 'Quarta-Feira'
            break
        case 4: 
            diaSema = 'Quinta-Feira'
            break
        case 5: 
            diaSema = 'Sexta-Feira'
            break
        case 6:
            diaSema = 'Sábado'
            break
        default:
            console.log('[ERRO] Dia inválido')
            break
        
    } 
    
/*if (mes == 0 && dia <= 31 ) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Janeiro de ${ano}`)
} else if (mes == 11 && dia <= 31) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Dezembro de ${ano}`)
} else if (mes == 1 && dia <= 31 ) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Fevereiro de ${ano}`)
} else if (mes == 2 && dia <= 29 ) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Março de ${ano}`)
} else if (mes == 3 && dia <= 31) {
       console.log(`Hoje é  ${diaSema}, dia ${dia} de Abril de ${ano}`)
} else if (mes == 4 && dia <= 30) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Maio de ${ano}`)
} else if (mes == 5 && dia <= 31) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de  Junho de ${ano}`) 
} else if (mes == 6 && dia <= dia <= 30) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Julho de ${ano}`)
} else if (mes == 7 && dia <=31) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Agosto de ${ano}`)
} else if (mes == 8 && dia <=30) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Setembro de ${ano}`)
} else if (mes == 9 && dia <= 31) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Outubro de ${ano}`)
} else if (mes == 10 && dia <= 30 ) {
        console.log(`Hoje é  ${diaSema}, dia ${dia} de Novembro de ${ano}`)
} else {
        console.log(`Inválido`)
}*/
switch(mes >= 0 && mes <= 11){
    case (mes == 0): console.log(`Hoje é  ${diaSema}, dia ${dia} de Janeiro de ${ano}`)
    break
    case (mes == 1): console.log(`Hoje é  ${diaSema}, dia ${dia} de Fevereiro de ${ano}`)
    break
    case (mes == 2): console.log(`Hoje é  ${diaSema}, dia ${dia} de Março de ${ano}`)
    break
    case (mes == 3): console.log(`Hoje é  ${diaSema}, dia ${dia} de Abril de ${ano}`)
    break
    case (mes == 4): console.log(`Hoje é  ${diaSema}, dia ${dia} de Maio de ${ano}`)
    break
    case (mes == 5): console.log(`Hoje é  ${diaSema}, dia ${dia} de  Junho de ${ano}`)
    break
    case (mes == 6): console.log(`Hoje é  ${diaSema}, dia ${dia} de Julho de ${ano}`)
    break
    case (mes == 7): console.log(`Hoje é  ${diaSema}, dia ${dia} de Agosto de ${ano}`)
    break
    case (mes == 8): console.log(`Hoje é  ${diaSema}, dia ${dia} de Setembro de ${ano}`)
    break
    case (mes == 9): console.log(`Hoje é  ${diaSema}, dia ${dia} de Outubro de ${ano}`)
    break
    case (mes == 10): console.log(`Hoje é  ${diaSema}, dia ${dia} de Novembro de ${ano}`)
    break
    case (mes == 11): console.log(`Hoje é  ${diaSema}, dia ${dia} de Dezembro de ${ano}`)
    break
    default: console.log("Invalido")
}
switch(horas >= 0) {
    case (horas <=1 && minutos >= 2 && minutos < 60 ): console.log(`Agora são ${horas} hora e ${minutos} minutos`)
    break
    case (horas > 1 && horas < 24 && minutos >= 2 && minutos < 60 ): console.log(`Agora são ${horas} horas e ${minutos} minutos`) 
    break
    case (horas <=1 && minutos == 1 ): console.log(`Agora são ${horas} hora e ${minutos} minuto`)
    break
    case (horas > 1 && horas < 24 && minutos == 1 ): console.log(`Agora são ${horas} horas e ${minutos} minuto`) 
    break
    case (horas > 1 && horas < 24 && minutos == 0 ): console.log(`Agora são ${horas} horas`) 
    break
    default: console.log('Inválido')
    break
}
if (horas < 12 && horas >= 6 ) {
    console.log('Bom dia')
} else if (horas >= 12 && horas < 18){ 
    console.log('Boa tarde')
} else if (horas >= 18 && horas <= 23.59) {
    console.log('Boa noite')
} else if (horas < 6 && horas >= 0) {
    console.log('Boa madrugada')
} else {
    console.log('Inválido')
}