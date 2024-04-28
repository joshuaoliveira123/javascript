// 96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de 
// um aluno e retornar a sua média para o programa principal.

import { randomNum } from '../../exercicios/numero-aleatorio.js'

function principal() {
    const media = (...nums) => {
        let sum = 0
        nums.forEach(n => sum += n)
        return sum / nums.length
    }

    console.log(media(randomNum(10), randomNum(10)))
}

principal()