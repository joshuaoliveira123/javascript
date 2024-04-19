// 49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles 
// são pares e quantos são ímpares.
import { randomNum } from '../../exercicios/numero-aleatorio.js'

const nums = new Array(6)
let par = 0
let impar = 0

for (let i = 0; i < nums.length; i++) {
    nums[i] = randomNum(10)
    
    if (nums[i] % 2 === 0) {
        // PAR
        par++
    } else {
        // IMPAR
        impar++
    }
}

console.log(`Dos 6 números, são eles: [${nums}]`)
console.log(`Pares: ${par}`)
console.log(`Impares: ${impar}`)