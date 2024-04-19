// 48) Faça um programa que leia 7 números inteiros e no final mostre o somatório 
// entre eles.

import { randomNum } from "../../exercicios/numero-aleatorio.js"

const nums = new Array(7)
let sum = 0
for (let i = 0; i < nums.length; i++) {
    nums[i] = `${randomNum(99)}`.padStart(2,'0')
    sum += Number(nums[i])
}

console.log(nums.length)
console.log(nums.join(' + '))
console.log(`Soma: ${sum}`)