// 75) Crie um programa que preencha automaticamente (usando lógica, não apenas 
    // atribuindo diretamente) um vetor numérico com 15 posições com os primeiros 
    // elementos da sequência de Fibonacci: 
    //  
    // 1 1 2 3 5 8 13  21  34  55  89  144  233  377  610  987 
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

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
        return console.log(`${arr.join(' ')}`)
    }
    
    fibonacci()