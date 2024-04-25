import { randomNum, randomMF } from './numero-aleatorio.js'

export const pessoas = function(n = 10) {
    const totalPessoas = {}
    for (let i = 1; i <= n; i++) {
        totalPessoas[`pessoa${i}`] = {
            peso: randomNum(200, 30),
            idade: randomNum(100),
            sexo: randomMF(),
            altura: randomNum(220, 100) / 100,
        }
    }
    return totalPessoas
}