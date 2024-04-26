import { randomNum, randomMF } from './numero-aleatorio.js'

export const criarPessoas = function(n = 10) {
    const pessoas = {}
    for (let i = 1; i <= n; i++) {
        pessoas[`pessoa${i}`] = {
            peso: randomNum(200, 30),
            idade: randomNum(100),
            sexo: randomMF(),
            altura: randomNum(220, 100) / 100,
            salario: randomNum(10000, 1000)
        }
    }
    return pessoas
}