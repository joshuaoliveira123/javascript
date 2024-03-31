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
    const numSorteio = sorteio()
    const num = Number(inputNumber.value)

    if (inputNumber.value.length == 0) {
        alert('ERROR | Digite um número!')
    } else if (num < 1 || num > 5) {
        alert('ERROR | Número inválido! Digite um número entre 1 e 5.')
    } else {
        output.innerHTML = ''
    
        output.appendChild(criarParagrafo(`Número escolhido ${num}`))
        output.appendChild(criarParagrafo(`Número sorteado: ${numSorteio}`))
    
        if (numSorteio === num) {
            output.appendChild(criarParagrafo(`Você jogou ${num} e ACERTOU!`))
        }
    
        focoInput()
    }

}

function criarParagrafo(txt) {
    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = txt
    return paragrafo
}

function focoInput() {
    inputNumber.value = ''
    inputNumber.focus()
}

function sorteio() {
    let randomNumber = Math.floor(Math.random() * 5) + 1
    return randomNumber
}