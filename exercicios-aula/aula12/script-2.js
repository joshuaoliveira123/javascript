var agora = new Date()
var diaSem = agora.getDay()
// 0 = domingo;
// 1 = segunda-feira;
// 2 = terça-feira;
// 3 = quarta-feira;
// 4 = quinta-feira;
// 5 = sexta-feira; e
// 6 = sábado.

console.log(diaSem)

switch (diaSem) {
    case 0:
        diaSem = 'domingo'
        break
    
    case 1:
        diaSem = 'segunda-feira'
        break

    case 2:
        diaSem = 'terça-feira'
        break

    case 3:
        diaSem = 'quarta-feira'
        break

    case 4:
        diaSem = 'quinta-feira'
        break

    case 5:
        diaSem = 'sexta-feira'
        break

    case 6:
        diaSem = 'domingo'
        break

    default:
        diaSem = 'ERROR: Não foi possível encontrar nenhum valor equivalente.'
        break
}

console.log(`Hoje é ${diaSem}.`)