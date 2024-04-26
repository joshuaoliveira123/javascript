// 58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa 
// vai parar quando for digitada a idade 999. No final, mostre quantos alunos 
// existem na turma e qual é a média de idade do grupo.

import { criarPessoas } from '../../exercicios/pessoas.js'
import { media } from '../../exercicios/media.js'

const pessoas = criarPessoas(7)
const nums = []

for (const p in pessoas) {
    let idade = pessoas[p].idade
    console.log(`${p} tem: ${idade} anos`)
    nums.push(idade)
}

console.log(`Média: ${media(nums).toFixed(1)} anos`)