// 37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um 
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, 
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
// No final, mostre o seu novo salário, baseado na tabela a seguir: 
//  
// - Mulheres 
//   - menos de 15 anos de empresa: +5% 
//   - de 15 até 20 anos de empresa: +12% 
//   - mais de 20 anos de empresa: +23% 
// - Homens 
//   - menos de 20 anos de empresa: +3% 
//   - de 20 até 30 anos de empresa: +13% 
//   - mais de 30 anos de empresa: +25%

import { moeda } from '../../exercicios/dinheiro-brl/moeda.js'

const aumento = function(genero, salario = 0, anos=0) {
    if (anos < 0) {
        console.log('ERROR | Ninguém trabalha por "tempo negativo"!')
        return salario
    }

    switch (genero.toLowerCase()) {
        case 'homem':
            if (anos < 20) {
                salario *= 1.03
            } else if (anos < 30) {
                salario *= 1.13
            } else {
                salario *= 1.25
            }
            break
        
        case 'mulher':
            if (anos < 15) {
                salario *= 1.05
            } else if (anos < 20) {
                salario *= 1.12
            } else {
                salario *= 1.23
            }
            break
    
        default:
            salario *= 1.0001 /* aumento de 0.01% */
            break
    }
    return salario
}

const pessoas = {
    pessoa1: aumento('homem',1500,4),
    pessoa2: aumento('mulher',1500,4),
    pessoa3: aumento('HomEm',3000,20),
    pessoa4: aumento('MuLher',3000,20),
    pessoa5: aumento('gasparzinho',3000,50),
    pessoa6: aumento('HoMeM',5000)
}

const moedaBRL = a => a.toLocaleString('pt-br', moeda('brl'))

for (const pessoa in pessoas) {
    console.log(`O novo salario da ${pessoa} é de ${moedaBRL(pessoas[pessoa])}`)
}