// 63) Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
// No final, mostre na tela: 
//  a) O somatório entre todos os valores 
//  b) Qual foi o menor valor digitado 
//  c) A média entre todos os valores 
//  d) Quantos valores são pares

import { randomNum } from '../../exercicios/numero-aleatorio.js'
import { media } from '../../exercicios/media.js'
import { soma } from '../../exercicios/soma.js'
import { linha } from '../../exercicios/linha.js'

const principal = function(nums) {
    linha(40)
    console.log(`Números: ${nums.join(' ')}`)
    linha(40)
    console.log(`Somatório: ${soma(nums)}`)
    console.log(`Menor valor: ${menorValor(nums)}`)
    console.log(`Média: ${media(nums)}`)
    console.log(`Quantos são pares: ${quantosPares(nums)}`)
}

const menorValor = arr => {
    let menor = Infinity
    arr.forEach(i => menor = (i < menor) ? i : menor)
    return menor
}

const quantosPares = arr => {
    let cont = 0
    arr.forEach(i => cont += (i % 2 === 0) ? 1 : 0)
    return cont
}

const arrNums = (n = 10) => {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = randomNum(100)
    }
    return arr
}

principal(arrNums())