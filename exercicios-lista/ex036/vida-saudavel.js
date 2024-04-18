// 36) Um programa de vida saudável quer dar pontos atividades físicas que podem 
// ser trocados por dinheiro. O sistema funciona assim: 
//  
//    - Cada hora de atividade física no mês vale pontos 
    //   - até 10h de atividade no mês: ganha 2 pontos por hora 
    //   - de 10h até 20h de atividade no mês: ganha 5 pontos por hora 
    //   - acima de 20h de atividade no mês: ganha 10 pontos por hora 
//    - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
import { moeda } from '../../exercicios/dinheiro-brl/moeda.js'

const pontos = function(hora = 0) {
    let valorHora = 2
    if (hora > 10 && hora <= 20) {
        valorHora = 5
    } else if (hora > 20) {
        valorHora = 10
    }
    return valorHora * hora
}

const moedaBRL = a => a.toLocaleString('pt-br', moeda('brl'))

const pessoas = {
    pessoa1: pontos(2),
    pessoa2: pontos(62),
    pessoa3: pontos(14),
    pessoa4: pontos()
}

for (const pessoa in pessoas) {
    console.log(`Valor a receber da ${pessoa}: ${moedaBRL(pessoas[pessoa])}`)
}