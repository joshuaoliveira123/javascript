// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um 
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele 
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule 
// quantos dias de vida um fumante perdeu e exiba o total em dias.

const minutoParaHora = (minuto=0) => minuto / 60
const horaParaDia = (hora=0) => hora / 24
const anoParaDia = (ano=0) => ano * 365

const tempoPerdido = (cigarros=0) => cigarros * horaParaDia(minutoParaHora(10))

const fumante = function(cigarros=0, anos=0) {
    cigarros *= anoParaDia(anos)
    return tempoPerdido(cigarros)
}

console.log(`Você ja perdeu ${fumante(5,2).toFixed(3)} dias de vida!`)