// 57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. 
// No final, mostre o total de salários pagos aos homens e o total pago às 
// mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não 
// sempre que ler os dados de um funcionário.

import { criarPessoas } from '../../exercicios/pessoas.js'
import { toMoeda } from '../../exercicios/dinheiro-brl/moeda.js'

const pessoas = criarPessoas(5)

for (let p in pessoas) {
    console.log(`${p} | ${pessoas[p].sexo} | recebe: ${toMoeda(pessoas[p].salario)}`)
}