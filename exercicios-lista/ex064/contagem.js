// 64) Desenvolva um programa usando a estrutura “para” que mostre na tela a 
// seguinte contagem: 
// 0 5 10 15 20 25 30 35 40 Acabou

const nums = []
for (let i = 0; i <= 40; i += 5) {
    nums.push(i)
}
console.log(`${nums.join(' ')} Acabou`)