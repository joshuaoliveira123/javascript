// 76) Crie um programa que preencha automaticamente um vetor numérico com 7 
// números gerados aleatoriamente pelo computador e depois mostre os valores 
// gerados na tela.

const array = []
const randomNumber = (max, min=0) => Math.floor(Math.random() * (max - min) + min)

for (let i = 0; i < 7; i++) {
    array[i] = randomNumber(1,20)
}

console.log(array)