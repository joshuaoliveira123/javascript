// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
const carteira = 50
const taxa = 3.45

const conversao = reais => reais / taxa

const moedaBRL = {
    style: 'currency',
    currency: 'BRL'
}

const moedaUSD = {
    style: 'currency',
    currency: 'USD'
}

console.log(`${carteira.toLocaleString('pt-br', moedaBRL)} a uma taxa de ${taxa}:1 você fica com ${conversao(50).toLocaleString('en', moedaUSD)}`)
