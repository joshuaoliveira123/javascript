// 85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e 
// guarde esses dados em três vetores. No final, mostre uma listagem contendo 
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

import { criarPessoas } from '../../exercicios/pessoas.js'

const pessoas = criarPessoas(5)

function principal() {    
    for (const i in pessoas) {
        let p = pessoas[i]
        if (p.sexo === 'F' && p.salario > 5000) {
            console.log(`${i}:`)
            console.log(pessoas[i])
        }
    }
}

principal()