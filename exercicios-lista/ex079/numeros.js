// 79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. 
// No final, mostre quais são os números pares que foram digitados e em que 
// posições eles estão armazenados. 

import { randomNum } from '../../exercicios/numero-aleatorio.js'
import { linha } from '../../exercicios/linha.js'

const nums = []
let posPares = []
let j = 0
for (let i = 0; i < 10; i++) {
    nums[i] = randomNum(99)
    if (nums[i] % 2 === 0) {
        posPares[j++] = i
    }
}
console.log(nums.join(' '))
linha(60)
console.log(`Posições onde são visto os pares: ${posPares.join(', ')}`)