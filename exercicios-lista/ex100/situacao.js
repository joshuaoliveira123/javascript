// 100) Melhore o exercício 96, criando além da função Media() uma outra função 
// chamada Situacao(), que vai retornar para o programa principal se o aluno está 
// APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como 
// parâmetro o resultado retornado pela função Media().

import { randomNum } from '../../exercicios/numero-aleatorio.js'

function principal() {
    const media = (...nums) => {
        let sum = 0
        nums.forEach(n => sum += n)
        return sum / nums.length
    }

    const situacao = (m) => {
        if (m < 5) {
            return 'REPROVADO'
        } else if (m < 6) {
            return 'RECUPERAÇÃO'
        } else {
            return 'APROVADO'
        }
    }

    const med = media(randomNum(10), randomNum(10))
    console.log(med)
    console.log(situacao(med))
}

principal()