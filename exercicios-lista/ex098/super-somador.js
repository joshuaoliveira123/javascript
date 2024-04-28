// 98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois 
// números como parâmetro e depois vai retornar a soma de todos os valores no 
// intervalo entre os valores recebidos. 
// Ex:  
// SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21 
// SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

function superSomador(ini, fim) {
    const nums = []
    let sum = 0
    for (let i = ini; i <= fim; i++) {
        nums.push(i)
        sum += i
    }
    return console.log(`${nums.join(' + ')} = ${sum}`)
}

superSomador(1,6)
superSomador(15,19)