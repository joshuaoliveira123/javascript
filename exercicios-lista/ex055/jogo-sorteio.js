// 55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de 
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4 
// tentativas para tentar acertar.

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function jogo(vidas = 4) {
    // criar numero-aleatorio 1 a 10
    while (vidas > 0) {
        // limpar tela
        // mostrar quantidade de vidas restantes
        // chute
            // se acertar SAIR DO LOOP
            // se errar vidas--
    }
    // conferir se existem vidas (vida > 0)
        // se sim, VENCEU
        // se não, PERDEU
}