// 83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números 
// aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os 
// números gerados e depois coloque o vetor em ordem crescente, mostrando no final 
// os valores ordenados.

import { randomNum } from '../../exercicios/numero-aleatorio.js'
import { linha } from '../../exercicios/linha.js'

function principal() {
    const nums = []
    for (let i=0;i<20;i++) {
        nums[i] = randomNum(99)
    }

    const strArr = arr => arr.join(' ')
    const ordNums = [...nums].sort((a, b) => a - b)

    console.log(strArr(nums))
    linha(60)
    console.log(strArr(ordNums))
}

principal()