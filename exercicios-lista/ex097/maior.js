// 97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma 
// adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o 
// maior entre eles.

const maiorValor = (...nums) => {
    let maior = 0
    for (const n of nums) {
        maior = (n > maior) ? n : maior
    }
    return console.log(`${nums.join(' ').padEnd(6,' ')} | Maior: ${maior}`)
}

maiorValor(5,8,5)
maiorValor(5,5,5)
maiorValor(85,8,5)