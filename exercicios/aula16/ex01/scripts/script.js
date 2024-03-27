let inputNumber = document.querySelector('#number')
let outputSelect = document.querySelector('#select')
let outputResult = document.querySelector('#result')
let valores = []

// Permite enviar as coisas clicando ENTER!!
inputNumber.addEventListener('keyup', (evento) => {
    if (evento.key === 'Enter') {
        adicionar()
    }
})

function verificaNumero(n) {
    let bool = (n.length != 0 && n >= 1 && n <= 100)
    return bool 
}

function taNaLista(n, a) {
    for (let i in a) {
        if (n == a[i]) {
            return true
        }
    }
    return false
}

function adicionar() {
    let num = Number(inputNumber.value)
    let option = document.createElement('option')
    
    if (verificaNumero(inputNumber.value) && ! taNaLista(inputNumber.value, valores)) {
        valores.push(num)
        
        option.value = `num${num}`
        option.innerHTML = `Número ${num} adicionado!`
        outputSelect.appendChild(option)
        outputResult.innerHTML = ''
    } else {
        alert('[ERROR] Número inválido ou ja presente na lista!')
    }

    inputNumber.value = ''
    // Deixa selecionado, como se fosse o click do mouse
    inputNumber.focus()
}

function imprimir() {
    if (valores.length == 0) {
        alert('[ERROR] Array vazio, adicione um número!')
    } else {
        let totalElementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let i in valores) {
            soma += valores[i]

            if (valores[i] > maior) {
                maior = valores[i]
            }

            if (valores[i] < menor) {
                menor = valores[i]
            }
        }

        media = soma / totalElementos

        outputResult.innerHTML = ''
        outputResult.innerHTML += `<p>Existem ${totalElementos} elementos no array!</p>`
        outputResult.innerHTML += `<p>Maior valor: ${maior}</p>`
        outputResult.innerHTML += `<p>Menor valor: ${menor}</p>`
        outputResult.innerHTML += `<p>Soma de todos os elementos: ${soma}</p>`
        outputResult.innerHTML += `<p>Média: ${media}</p>`
    }
}