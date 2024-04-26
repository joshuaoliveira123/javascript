// 69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma 
// PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e 
// a soma entre todos os valores da sequência.

// PA(termo geral):
// a(n) = a(1) + (n - 1) * r

function pa(prime, razao, n = 10) {
    const nums = []
    let soma = 0
    for (let i = 1; i <= n; i++) {
        let termo
        termo = prime + (i - 1) * razao
        soma += termo
        nums.push(termo)
    }
    return console.log(`${nums.join(' ')}...`)
}

pa(3, 10)