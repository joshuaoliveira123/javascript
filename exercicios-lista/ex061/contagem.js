// 61) Crie um programa que mostre na tela a seguinte contagem, usando a estrutura 
// “faça enquanto” 
// 0 3 6 9 12 15 18 21 24 27 30 Acabou!
const nums = []
let i = 0

do {
    nums.push(i)
    i += 3
} while (i <= 30)

console.log(nums.join(' '))