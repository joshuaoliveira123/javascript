// 55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de 
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4 
// tentativas para tentar acertar.

function jogo(vidas = 4) {
    const numAleatorio = Math.floor(Math.random() * ((10 + 1) - 1) + 1)
    const nums = []
    alert('Vamos Jogar! É simples, apenas escolha um número entre 1 e 10. Se acertar você vence, se errar 4 vezes, perde!\n\nobs: caso envie qualquer coisa que não seja a resposta, terá vidas descontadas!')
    while (vidas > 0) {
        let res = prompt(`VIDAS: ${vidas} \nDigite um número (1 a 10)!`)
        nums.push(Number(res))
        if (Number(res) === numAleatorio) {
            break
        } else {
            vidas--
        }
    }
    const resultado = (vidas > 0) ? 'VENCEU' : 'PERDEU'
    alert(`Número sorteado: ${numAleatorio}\nNúmeros escolhidos: ${nums}\nVocê ${resultado}!`)
}