// 53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final: 
//  a) Quantos homens foram cadastrados 
//  b) Quantas mulheres foram cadastradas 
//  c) A média de idade do grupo 
//  d) A média de idade dos homens 
//  e) Quantas mulheres tem mais de 20 anos

import { media } from '../../exercicios/media.js'
import { randomNum, randomMF } from '../../exercicios/numero-aleatorio.js'

const pessoas = {}
for (let n = 1; n <= 5; n++) {
    pessoas[`pessoa${n}`] = {
        idade: randomNum(100),
        sexo: randomMF()
    }
}

const infoPessoas = function(pessoas) {
    const idades = []
    const idadeHomens = []
    let homens = 0
    let mulheres = 0
    let mulheres20 = 0

    for (const pessoa in pessoas) {
        let i = 1
        idades.push(pessoas[pessoa].idade)

        if (pessoas[pessoa].sexo.toUpperCase() === 'M') {
            homens++
            idadeHomens.push(pessoas[pessoa].idade)
        }

        if (pessoas[pessoa].sexo.toUpperCase() === 'F') {
            mulheres++
            mulheres20 += pessoas[pessoa].idade > 20 ? 1 : 0
        }
    }

    console.log(`Número Homens: ${homens}`)
    console.log(`Número Mulheres: ${mulheres}`)
    console.log(`Média idade grupo: ${media(idades).toFixed(1)}`)
    console.log(`Média idade homens: ${media(idadeHomens).toFixed(1)}`)
    console.log(`Número de mulheres com mais de 20 anos: ${mulheres20}`)
}

infoPessoas(pessoas)