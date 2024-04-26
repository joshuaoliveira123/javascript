// 70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência 
// de Fibonacci: 
// 1 1 2 3 5 8 13 21... 

function fibonacci(n = 10) {
    const arr = []
    let prev = 0
    let curr = 1
    for (let i = 0; i < n; i++) {
        arr.push(curr)
        let prox = prev + curr
        prev = curr
        curr = prox
    }
    return console.log(`${arr.join(' ')}...`)
}

fibonacci()