// 54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando 
// no final: 
//  a) Qual foi a média de altura do grupo 
//  b) Quantas pessoas pesam mais de 90Kg 
//  c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m 
//  d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.

import { media } from '../../exercicios/media.js'
import { criarPessoas } from '../../exercicios/pessoas.js'

const pessoas = criarPessoas(7)

const infoPessoas = function(pessoas) {
    const alt = []
    let pessoas90kg = 0
    let pessoas50menos160 = 0
    let pessoas100mais190 = 0

    for (const pessoa in pessoas) {
        alt.push(pessoas[pessoa].altura)

        pessoas90kg += (pessoas[pessoa].peso > 90) ? 1 : 0
        pessoas50menos160 += (pessoas[pessoa].peso < 50 && pessoas[pessoa].altura < 1.60) ? 1 : 0
        pessoas100mais190 += (pessoas[pessoa].peso > 100 && pessoas[pessoa].altura > 1.90) ? 1 : 0
    }

    console.log(`Média altura: ${media(alt).toFixed(2)} m`)
    console.log(`Pessoas +90kg: ${pessoas90kg}`)
    console.log(`Pessoas -50kg e -1.60m: ${pessoas50menos160}`)
    console.log(`Pessoas +100kg e +1.90m: ${pessoas100mais190}`)
}

infoPessoas(pessoas)