// 68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura 
// “para”. No final, mostre na tela: 
//  a) Quantas mulheres foram cadastradas 
//  b) Quantos homens pesam mais de 100Kg 
//  c) A média de peso entre as mulheres  
//  d) O maior peso entre os homens

const output = document.querySelector('#BOX2')
const pessoa = {
    homens: [0],
    mulheres: [0]
}

function main() {
    if (verificacoes(pessoa)) {
        output.appendChild(criarParagrafo(`Mulheres cadastradas: ${pessoa.mulheres.length}`))
        output.appendChild(criarParagrafo(`Homens com mais de 100 kg: ${numPesados(pessoa.homens)}`))
        output.appendChild(criarParagrafo(`Média de peso entre as mulheres: ${mediaPesoMulheres(pessoa.mulheres)} kg`))
        output.appendChild(criarParagrafo(`O Homem mais pesado tem ${oMaisPesado(pessoa.homens)} kg`))
    } else {
        console.log('ERROR | Valores inválidos ou não preenchidos!')
    }

}

function numPesados(peso) {
    let numPesados = 0
    for (let i in peso) {
        if (peso[i] > 100) {
            numPesados++
        }
    }
    return numPesados
}

function oMaisPesado(peso) {
    let maior = 0
    for (let i in peso) {
        if (peso[i] > maior) {
            maior = peso[i]
        }
    }
    return maior
}

function mediaPesoMulheres(peso) {
    let media = 0
    let soma = 0
    let elementos = peso.length
    for (let i in peso) {
        soma += peso[i]
    }
    media = soma / elementos
    return media.toFixed(2)
}

// TODO: fazer o QUESTIONARIO para pegar os dados das pessoas!
function verificacoes(pessoa) {
    // QUESTIONARIO
    const teste = (true) && (true) && (true) ? true : false
    return teste
}

function criarParagrafo(txt) {
    const paragrafo = document.createElement('p')
    paragrafo.innerText = txt
    return paragrafo
}