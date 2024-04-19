// 45) O programa acima vai ter um problema quando digitarmos o primeiro valor 
// maior que o último. Resolva esse problema com um código que funcione em qualquer 
// situação.

const contagem = function(fim = 0, ini = 0, inc = 1) {
    const nums = []
    inc = (inc < 1) ? 1 : inc

    if (ini > fim) {
        [ini, fim] = [fim, ini]
    }

    for (let i = ini; i <= fim; i += inc) {
        nums.push(i)
    }
    console.log(`${nums} Acabou!`)
}

contagem(30,15)
contagem(15,30)
contagem(15,30,0)
