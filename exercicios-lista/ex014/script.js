// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

const aluguelDeCarros = function(distancia=0, dias=1) {
    const precoDias = 90
    const precoKm = 0.2

    return (dias * precoDias) + (distancia * precoKm)
}

const moedaBRL = {
    style: 'currency',
    currency: 'BRL'
}

const aluguel = aluguelDeCarros(100, 5)
console.log(`Total a pagar: ${aluguel.toLocaleString('pt-br', moedaBRL)}`)