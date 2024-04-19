// 44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o 
// incremento, mostrando em seguida todos os valores no intervalo: 
// Ex: Digite o primeiro Valor: 3 
// Digite o último Valor: 10 
// Digite o incremento: 2 
// Contagem: 3 5 7 9 Acabou!

const contagem = function(fim = 0, ini = 0, inc = 1) {
    const nums = []
    for (let i = ini; i <= fim; i += inc) {
        nums.push(i)
    }
    console.log(`${nums} Acabou!`)
}

contagem(10)
contagem(25,5,5)
contagem(25,5)