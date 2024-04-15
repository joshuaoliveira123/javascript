// 29) Desenvolva um programa que leia o nome de um funcionário, seu salário, 
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de 
// acordo com a tabela a seguir: 
//    - Até 3 anos de empresa: aumento de 3% 
//    - entre 3 e 10 anos: aumento de 12.5% 
//    - 10 anos ou mais: aumento de 20%

const moedaBRL = require('../../exercicios/dinheiro-brl/moeda')

const aumento = function(nome, salario, tempoTrabalhando) {
    if (tempoTrabalhando <= 0) {
        return console.log('ERROR | Tempo trabalhando inválido! Confira os dados e tente novamente.')
    }

    if (tempoTrabalhando < 3) {
        salario *= 1.03
    } else if (tempoTrabalhando < 10) {
        salario *= 1.125
    } else {
        salario *= 1.2
    }

    return console.log(`Senhor(a), ${nome}. Seu novo salario é de ${salario.toLocaleString('pt-br', moedaBRL.moeda('brl'))} por ter trabalhado ${tempoTrabalhando} anos na empresa!`)
}

aumento('João', 1504.2, 5)