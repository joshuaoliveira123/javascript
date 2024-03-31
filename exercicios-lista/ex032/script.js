// 32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o 
// jogador vai tentar descobrir qual foi o valor sorteado.

const inputNumber = document.querySelector('#numero')
const output = document.querySelector('#BOX2')

inputNumber.addEventListener('keyup', (evento) => {
    if (evento.key === 'Enter') {
        jogo()
    }
})

function jogo() {
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const numSorteio = sorteio()
    const num = Number(inputNumber.value)

    if (inputNumber.value.length == 0) {
        alert('ERROR | Digite um número!')
    } else if (num < 1 || num > 5) {
        alert('ERROR | Número inválido! Digite um número entre 1 e 5.')
    } else {
        output.innerHTML = ''
    
        p1.innerHTML = `Número escolhido: ${num}`
        p2.innerHTML = `Número sorteado: ${numSorteio}`
        output.appendChild(p1)
        output.appendChild(p2)
    
        if (numSorteio === num) {
            const p3 = document.createElement('p')
            p3.innerHTML = `Você jogou ${num} e ACERTOU!`
            output.appendChild(p3)
        }
    
        focoInput()
    }

}

function focoInput() {
    inputNumber.value = ''
    inputNumber.focus()
}

function sorteio() {
    let randomNumber = Math.floor(Math.random() * 5) + 1
    return randomNumber
}