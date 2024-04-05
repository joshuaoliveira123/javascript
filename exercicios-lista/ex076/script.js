// 76) Crie um programa que preencha automaticamente um vetor numérico com 7 
// números gerados aleatoriamente pelo computador e depois mostre os valores 
// gerados na tela.

const array = []

for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 10)
    array[i] = randomNumber /* entre 0 a 10 */
}

console.log(array)