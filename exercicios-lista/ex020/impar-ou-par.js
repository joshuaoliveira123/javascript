// 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou 
// ÍMPAR. 

const parImpar = (n) => {
    let situacao = n % 2 === 0 ? 'PAR' : 'IMPAR'
    return situacao
}

console.log(parImpar(25))
console.log(parImpar(5))
console.log(parImpar(2))
console.log(parImpar(2558))