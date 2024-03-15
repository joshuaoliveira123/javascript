var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

console.log(`Agora são ${hora}h${minuto}min!`)

if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}