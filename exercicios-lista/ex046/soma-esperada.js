// 46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 
// 8 + 10 + 12 + 14 + ... + 98 + 100.

const nums = []
let sum = 0

for (let i = 6; i <= 100; i += 2) {
    nums.push(i)
    sum += i
}

console.log(`${nums.join(' + ')} Acabou!`)
console.log(`Soma: ${sum}`)