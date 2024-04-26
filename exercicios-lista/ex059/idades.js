// 59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai 
// perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre: 
//  a) qual é a maior idade lida 
//  b) quantos homens foram cadastrados 
//  c) qual é a idade da mulher mais jovem 
//  d) qual é a média de idade entre os homen

import { criarPessoas } from '../../exercicios/pessoas.js'
import { media } from '../../exercicios/media.js'
import { linha } from '../../exercicios/linha.js'

const pessoas = criarPessoas()

function principal() {
    console.log(`Idades: ${mostrarGrupo()}`)
    linha(40)
    console.log(`Maior idade: ${maiorIdade()} anos`)
    console.log(`Homens cadastradas: ${homensCadastrados()}`)
    console.log(`Menor idade (Mulheres): ${mulherJovem()} anos`)
    console.log(`Média (Homens): ${mediaHomens()} anos`)
}

const mostrarGrupo = (pess = pessoas) => {
    const arr = []
    for (const p in pess) {
        let idade = pess[p].idade
        arr.push(idade)
    }
    return arr.join(' ')
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

principal()