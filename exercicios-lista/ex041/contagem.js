// 41) Desenvolva um programa que mostre na tela a seguinte contagem: 
// 100 95 90 85 80 ... 0 Acabou! 

const arr = []
for (let i = 100; i >= 0; i -= 5) {
    arr.push(i)
}
console.log(arr.join(' '))
console.log('Acabou!')