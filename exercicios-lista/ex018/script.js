// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
// dela e depois mostre se ela pode ou não votar.

const calculaIdade = function(ano) {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const idade = anoAtual - ano
    return idade
}

const podeVotar = function(idade) {
    if (idade < 16) {
        return 'não pode votar!'
    } else if (idade < 18) {
        return 'pode votar.'
    } else {
        return 'deve votar!'
    }
}

const idade = calculaIdade(2004)
console.log(`Você tem ${idade} anos e ${podeVotar(idade)}`)