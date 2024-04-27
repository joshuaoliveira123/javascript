// 94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado 
// Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos 
// termos da sequência serão mostrados na tela. O seu procedimento deve receber 
// esse valor e mostrar a quantidade de elementos solicitados. 
// Obs: Use os exercícios 70 e 75 para te ajudar na solução 
// Ex:  
// Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM 
// Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM

function fibonacci(n = 15) {
    const arr = []
    let prev = 0
    let curr = 1
    for (let i = 0; i < n; i++) {
        arr.push(curr)
        let prox = prev + curr
        prev = curr
        curr = prox
    }
    return console.log(`${arr.join(' >> ')} >> FIM`)
}

fibonacci(5)
fibonacci(9)