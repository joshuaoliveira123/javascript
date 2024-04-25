// 66) Escreva um programa que leia um número qualquer e mostre a tabuada desse 
// número, usando a estrutura “para”. 
// Ex: Digite um valor: 5 
// 5 x 1 = 5 
// 5 x 2 = 10 
// 5 x 3 = 15 ...

const tabuada = function(n) {
    for (let i = 0; i <= 10; i++) {
        let result = n * i
        console.log(`${n} x ${i} = ${result}`)
    }
}

tabuada(5)