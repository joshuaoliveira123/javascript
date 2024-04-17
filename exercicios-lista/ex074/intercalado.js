// 74) Crie um programa que preencha automaticamente (usando lógica, não apenas 
    // atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo: 
    // 
    // 5 3 5 3 5 3 5 3 5 3 
    // 0 1 2 3 4 5 6 7 8 9

const array = []
const n = 5

for (let i = 0; i < n; i++) {
    array.push(5)
    array.push(3)
}

console.log(array)
console.log(array.length)