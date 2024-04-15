// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja 
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
// viagens até 200Km e R$0.45 para viagens mais longas.

const passagem = function(distancia) {
    let valorPorKm = 0.5

    if (distancia > 200) {
        valorPorKm = 0.45
    }

    return distancia * valorPorKm
}

const moedaBRL = require('../../exercicios/dinheiro-brl/moeda')

const viagem1 = passagem(77).toLocaleString('pt-br', moedaBRL.moeda('brl'))
const viagem2 = passagem(260).toLocaleString('pt-br', moedaBRL.moeda('brl'))
const viagem3 = passagem(197).toLocaleString('pt-br', moedaBRL.moeda('brl'))

console.log(`Total a pagar na 1ª viagem: ${viagem1}`)
console.log(`Total a pagar na 2ª viagem: ${viagem2}`)
console.log(`Total a pagar na 3ª viagem: ${viagem3}`)