// 52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final: 
//  a) Qual é a média de idade do grupo 
//  b) Quantas pessoas tem mais de 18 anos 
//  c) Quantas pessoas tem menos de 5 anos 
//  d) Qual foi a maior idade lida

import { randomNum } from '../../exercicios/numero-aleatorio.js'
import { linha } from '../../exercicios/linha.js'
import { media } from '../../exercicios/media.js'

const main = function(idades = [0]) {
    const med = media(idades)
    let maior18Anos = 0
    let menor5Anos = 0
    let maior = 0

    for (const i of idades) {
        maior = i > maior ? i : maior
        maior18Anos += i > 18 ? 1 : 0
        menor5Anos += i < 5 ? 1 : 0
    }

    console.log(`Média: ${med}`)
    console.log(`Pessoas com mais de 18 anos: ${maior18Anos}`)
    console.log(`Pessoas com menos de 5 anos: ${menor5Anos}`)
    console.log(`Maior idade: ${maior}`)
}

const arrayNums = function (n=0) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = randomNum(100)
    }
    return arr
}

const nums = arrayNums(10)
linha(40)
console.log(nums.join())
linha(40)
main(nums)
