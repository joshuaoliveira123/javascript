// 54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando 
// no final: 
//  a) Qual foi a média de altura do grupo 
//  b) Quantas pessoas pesam mais de 90Kg 
//  c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m 
//  d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.

import { media } from '../../exercicios/media.js'
import { randomNum } from '../../exercicios/numero-aleatorio.js'

const pessoas = {}
for (let n = 1; n <= 7; n++) {
    pessoas[`pessoa${n}`] = {
        peso: randomNum(200,30),
        altura: randomNum(230,120)
    }
}

const infoPessoas = function(pessoas) {
    const alt = []
    let pessoas90kg = 0
    let pessoas50menos160 = 0
    let pessoas100mais190 = 0

    for (const pessoa in pessoas) {
        alt.push(pessoas[pessoa].altura)

        pessoas90kg += (pessoas[pessoa].peso > 90) ? 1 : 0
        pessoas50menos160 += (pessoas[pessoa].peso < 50 && pessoas[pessoa].altura < 160) ? 1 : 0
        pessoas100mais190 += (pessoas[pessoa].peso > 100 && pessoas[pessoa].altura > 190) ? 1 : 0
    }

    console.log(`Média altura: ${media(alt)} cm`)
    console.log(`Pessoas +90kg: ${pessoas90kg}`)
    console.log(`Pessoas -50kg e -160cm: ${pessoas50menos160}`)
    console.log(`Pessoas +100kg e +190cm: ${pessoas100mais190}`)
    
}

infoPessoas(pessoas)