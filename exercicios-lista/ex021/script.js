// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
// BISSEXTO.
// Considere um ano bissexto se repetindo a cada 4 anos.

const anoBissexto = ano => {
    if (ano % 4 === 0) {
        return 'Sim'
    }
    return 'Não'
}

const situacao = anoBissexto(2024)

console.log(situacao)