// 62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de 
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
// na tela: 
//  a) Quantas idades foram digitadas 
//  b) Qual é a média entre as idades digitadas 
//  c) Quantas pessoas tem 21 anos ou mais.

import { randomNum } from '../../exercicios/numero-aleatorio.js'
import { media } from '../../exercicios/media.js'

const principal = function(nums) {
    const maiores21 = (arr=nums) => {
        let cont = 0
        for (const i of arr) {
            if (i > 21) {
                cont++
            }
        }
        return cont
    }

    console.log(`Número de pessoas cadastradas: ${nums.length}`)
    console.log(`Média: ${media(nums)}`)
    console.log(`Número de pessoas acima de 21 anos: ${maiores21()}`)
}

const nums = []
for (let i = 0; i < 10; i++) {
    nums[i] = randomNum(100)
}

principal(nums)