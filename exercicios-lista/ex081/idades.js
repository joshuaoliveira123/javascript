// 81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No 
// final, mostre: 
//  a) Qual é a média de idade das pessoas cadastradas 
//  b) Em quais posições temos pessoas com mais de 25 anos 
//  c) Qual foi a maior idade digitada (podem haver repetições) 
//  d) Em que posições digitamos a maior idade

import { criarPessoas } from '../../exercicios/pessoas.js'
import { media } from '../../exercicios/media.js'
import { linha } from '../../exercicios/linha.js'

const pessoas = criarPessoas(8)

function principal() {
    const idade = pessoaIdade(pessoas)
    console.log(`Idades: | ${idade.join(' | ')} |`)
    linha(60)
    console.log(`Média idade: ${mediaIdade(idade)}`)
    console.log(`Posições | pessoas maiores de 25 anos: ${posMaior25(idade)}`)
    console.log(`Maior idade: ${maiorIdade(idade)}`)
    console.log(`Posições | maior idade: ${posMaiorIdade(idade)}`)
}

const pessoaIdade = (pessoas) => {
    const idade = []
    for (const p in pessoas) {
        let nota = pessoas[p].idade
        idade.push(nota)
    }
    return idade
}

const mediaIdade = (idade) => media(idade).toFixed(1)

const posMaior25 = (idade) => {
    const arrPos = []
    let j = 0
    for (let i in idade) {
        if (idade[i] > 25) {
            arrPos[j++] = i
        }
    }
    return '[' + arrPos.join('][') + ']'
}

const maiorIdade = (idade) => {
    let maior = 0
    for (const i of idade) {
        maior = (i > maior) ? i : maior
    }
    return maior
}

const posMaiorIdade = (idade, maior = maiorIdade(idade)) => {
    const arrPos = []
    let j = 0
    for (let i in idade) {
        if (idade[i] === maior) {
            arrPos[j++] = i
        }
    }
    return '[' + arrPos.join('][') + ']'
}

principal()