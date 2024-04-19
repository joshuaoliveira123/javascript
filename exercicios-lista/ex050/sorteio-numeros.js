// 50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e 
// mostre na tela: 
//  a) Quais foram os números sorteados 
//  b) Quantos números estão acima de 5 
//  c) Quantos números são divisíveis por 3

import { randomNum } from '../../exercicios/numero-aleatorio.js'

const nums = new Array(20)
let maior5 = 0
let divisivel3 = 0

for (let i = 0; i < nums.length; i++) {
    nums[i] = randomNum(10, 0)
    
    if (nums[i] > 5) {
        maior5++
    }

    if (nums[i] % 3 === 0) {
        divisivel3++
    }
}

console.log(`Números: ${nums}`)
console.log('Na sequência tem:')
console.log(`${maior5} números maiores que 5`)
console.log(`${divisivel3} números divisíveis por 3`)