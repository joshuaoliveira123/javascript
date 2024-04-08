// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
// sua terça parte. 
// Ex:  
// Digite um número: 3.5 
// O dobro de 3.5 é 7.0 
// A terça parte de 3.5 é 1.16666

function main(n) {
    console.log(`Número: ${n}`)
    console.log(`Dobro: ${dobro(n)}`)
    console.log(`Terça parte: ${tercaParte(n)}`)
}

const dobro = n => n * 2

const tercaParte = n => n / 3

main(9)