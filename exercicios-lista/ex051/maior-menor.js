// 51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela 
// qual foi o maior e qual foi o menor preço digitados.

import { randomNum } from '../../exercicios/numero-aleatorio.js'

const produtos = function(preco = [0,0]) {
    let maior = 0
    let menor = Infinity

    for (let i of preco) {
        maior = i > maior ? i : maior
        menor = i < menor ? i : menor
    }

    console.log(`Lista: ${preco}`)
    console.log(`Menor valor: ${menor}`)
    console.log(`Maior valor: ${maior}`)
}

const preencherArray = (length = 10) => {
    const array = []

    for (let i = 0; i < length; i++) {
        array[i] = randomNum(99, 10)
    }

    return array
}

const nums = preencherArray()
produtos(nums)