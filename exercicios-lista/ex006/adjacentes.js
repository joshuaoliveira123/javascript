// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu 
// sucessor. 
// Ex:  
// Digite um número: 9 
// O antecessor de 9 é 8 
// O sucessor de 9 é 10

const adjacentes = (n) => {
    console.log(`Antecessor: ${n - 1}`)
    console.log(`Número escolhido: ${n}`)
    console.log(`Sucessor: ${n + 1}`)
}

adjacentes(5)