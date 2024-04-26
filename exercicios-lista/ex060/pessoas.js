// 60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas. 
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre: 
//  a) O mesmo do exercicio anterior
//  b) Quantos homens tem mais de 30 anos 
//  c) Quantas mulheres tem menos de 18 anos

import { criarPessoas } from '../../exercicios/pessoas.js'
import { media } from '../../exercicios/media.js'

const pessoas = criarPessoas()

function principal() {
    console.log(`Maior idade: ${maiorIdade()} anos`)
    console.log(`Homens cadastradas: ${homensCadastrados()}`)
    console.log(`Menor idade (Mulheres): ${mulherJovem()} anos`)
    console.log(`Média (Homens): ${mediaHomens()} anos`)
    console.log(`Homens com mais de 30 anos: ${homens30()}`)
    console.log(`Mulheres com menos de 18 anos: ${mulheres18()}`)
}

const maiorIdade = (pess = pessoas) => {
    let maior = 0
    for (const p in pess) {
        let idade = pess[p].idade
        maior = (idade > maior) ? idade : maior
    }
    return maior
}

const homensCadastrados = (pess = pessoas) => {
    let quantidade = 0
    for (const p in pess) {
        let sexo = pess[p].sexo
        quantidade += (sexo.toUpperCase() === 'M') ? 1 : 0
    }
    return quantidade
}

const mulherJovem = (pess = pessoas) => {
    let menor = Infinity
    for (const p in pess) {
        let idade = pess[p].idade
        let sexo = pess[p].sexo
        menor = (idade < menor && sexo.toUpperCase() === 'F') ? idade : menor
    }
    return menor
}

const mediaHomens = (pess = pessoas) => {
    const nums = []
    for (const p in pess) {
        let idade = pess[p].idade
        let sexo = pess[p].sexo
        if (sexo.toUpperCase() === 'M') {
            nums.push(idade)
        }
    }
    return media(nums).toFixed(1)
}

const homens30 = (pess = pessoas) => {
    let quantidade = 0
    for (const p in pess) {
        let idade = pess[p].idade
        let sexo = pess[p].sexo
        if (sexo.toUpperCase() === 'M' && idade > 30) {
            quantidade++
        }
    }
    return quantidade
}

const mulheres18 = (pess = pessoas) => {
    let quantidade = 0
    for (const p in pess) {
        let idade = pess[p].idade
        let sexo = pess[p].sexo
        if (sexo.toUpperCase() === 'F' && idade < 18) {
            quantidade++
        }
    }
    return quantidade
}

principal()