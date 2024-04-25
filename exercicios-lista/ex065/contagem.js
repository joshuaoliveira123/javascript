// 65) Desenvolva um programa usando a estrutura “para” que mostre na tela a 
// seguinte contagem: 
// 100 90 80 70 60 50 40 30 20 10 0 Acabou!

const nums = []
for (let i = 100; i >= 0; i-= 10) {
    nums.push(i)
}
console.log(`${nums.join(' ')} Acabou!`)