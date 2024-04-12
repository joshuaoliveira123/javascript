// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// que: 
//    - Homens ganham 5% de desconto 
//    - Mulheres ganham 13% de desconto

function promocao (nome, sexo, valorCompras) {
    let totPagar = 0

    if (sexo.toUpperCase() === 'M') {
        totPagar = valorCompras * (1 - 0.05)
        console.log(`Olá senhor ${nome}.`)
        console.log(`Para uma compra de ${valorCompras.toLocaleString('pt-br', moedaBRL)}.`)
        console.log(`Como o senhor recebe um desconto de 5% a sua compra fica em um total de ${totPagar.toLocaleString('pt-br', moedaBRL)}.`)
    } else if (sexo.toUpperCase() === 'F') {
        totPagar = valorCompras * (1 - 0.13)
        console.log(`Olá senhora ${nome}.`)
        console.log(`Para uma compra de ${valorCompras.toLocaleString('pt-br', moedaBRL)}.`)
        console.log(`Como a senhora recebe um desconto de 13% a sua compra fica em um total de ${totPagar.toLocaleString('pt-br', moedaBRL)}.`)
    } else {
        console.log('ERROR | SEM PROMOÇÃO PARA ESSE GÊNERO!')
    }
    return ''.padStart(90, '-')
}

const nome = { homem1: 'Flávio', mulher1: 'Maria' }
const sexo = { homem1: 'M', mulher1: 'F' }
const valorCompras = { homem1: 573, mulher1: 1682.52 }

const moedaBRL = { style: 'currency', currency: 'BRL' }

console.log(promocao(nome.homem1, sexo.homem1, valorCompras.homem1))
console.log(promocao(nome.mulher1, sexo.mulher1, valorCompras.mulher1))

