// 47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 + 
// 450 + 400 + 350 + 300 + ... + 50 + 0

const nums = []
let sum = 0

for (let i = 500; i >= 0; i -= 50) {
    nums.push(i)
    sum += i
}

console.log(`${nums.join(' + ')} Acabou!`)
console.log(`Soma: ${sum}`)