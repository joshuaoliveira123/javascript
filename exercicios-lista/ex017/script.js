// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const velocidadeAtual = 95

const sistemaMultas = function(velocidade=0) {
    if (velocidade > 80) {
        let acimaDaVelocidade = velocidade - 80
        let totalAPagar = acimaDaVelocidade * 5
        return totalAPagar
    }
    return 0
}

console.log(`Total a pagar: ${sistemaMultas(velocidadeAtual).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)