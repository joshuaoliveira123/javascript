// 42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
// qualquer e mostre uma contagem até esse valor: 
// Ex: Digite um valor: 35 
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

const contagem = function(c=0) {
    const arr = []
    for (let i = 0; i <= c; i++) {
        arr.push(i)
    }
    return arr.join(' ')
}

console.log(`${contagem(35)} Acabou!`)