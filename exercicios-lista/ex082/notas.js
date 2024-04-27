// 82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em 
// um vetor. No final, mostre:  
//  a) Qual é a média da turma 
//  b) Quantos alunos estão acima da média da turma 
//  c) Qual foi a maior nota digitada 
//  d) Em que posições a maior nota aparece

import { criarPessoas } from '../../exercicios/pessoas.js'
import { media } from '../../exercicios/media.js'
import { linha } from '../../exercicios/linha.js'

const pessoas = criarPessoas(8)

const principal = () => {
    const notas = idadeParaNota(pessoas)
    const m = mediaTurma(notas)
    const a = alunosAcimaMedia(notas, m)
    const n = maiorNota(notas)
    const p = posMaiorNota(notas, n)

    console.log(`Notas: | ${notas.join(' | ')} |`)
    linha(60)
    console.log(`Média: ${m}`)
    console.log(`Acima da média: ${a} alunos`)
    console.log(`Maior nota: ${n}`)
    console.log(`Posições | maior nota: ${p}`)
}

const idadeParaNota = (pessoas) => {
    const notas = []
    for (const p in pessoas) {
        let nota = pessoas[p].idade / 10
        notas.push(nota)
    }
    return notas
}

const mediaTurma = (notas) => media(notas).toFixed(1)

const alunosAcimaMedia = (notas, notaMedia) => {
    let numAlunos = 0
    for (const i of notas) {
        numAlunos += (i > notaMedia) ? 1 : 0
    }
    return numAlunos
} 

const maiorNota = (notas) => {
    let maior = 0
    for (const n of notas) {
        maior = (n > maior) ? n : maior
    }
    return maior
}

const posMaiorNota = (notas, maior) => {
    const arrPos = []
    let j = 0
    for (const i in notas) {
        if (notas[i] === maior) {
            arrPos[j++] = i
        }
    }
    return '[' + arrPos.join('] [') + ']'
}

principal()