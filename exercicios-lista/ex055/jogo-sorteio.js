// 55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de 
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4 
// tentativas para tentar acertar.

const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const rl = readline.createInterface({ input, output })

function jogo(vidas = 4) {
    const numAleatorio = Math.floor(Math.random() * ((10 + 1) - 1) + 1)
    while (vidas > 0) {
        // limpar tela
        console.log(`VIDAS: ${vidas}`)
        // chute | rl.question(pergunta, callback)
            // callback:
                // se acertar SAIR DO LOOP
                // se errar vidas--
    }
    const resultado = (vidas > 0) ? 'VENCEU' : 'PERDEU'
    console.log(resultado)
}

jogo()