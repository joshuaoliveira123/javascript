// 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando 
// na tela uma das mensagens abaixo: 
//    - O primeiro valor é o maior 
//    - O segundo valor é o maior 
//    - Não existe valor maior, os dois são iguais 

function whoBiggerThan(a, b) {
    if (a > b) {
        return `${a} > ${b}`
    } else if (b > a) {
        return `${b} > ${a}`
    } else {
        return `${a} = ${b}`
    }
}

console.log(whoBiggerThan(5,7))
console.log(whoBiggerThan(7,7))
console.log(whoBiggerThan(20,9))