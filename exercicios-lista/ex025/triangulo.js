// 25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. 
// Analise seus comprimentos e diga se é possível formar um triângulo com essas 
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento 
// de cada lado deve ser menor que a soma dos outros dois.

function triangulo(a, b, c) {
    let ab = a + b
    let bc = b + c
    let ac = a + c

    if (a < bc && b < ac && c < ab) {
        return true
    }

    return false
}

let lados = (a, b, c) => `É ${triangulo(a, b, c)} que as retas ${a}, ${b} e ${c} poderiam formar um triangulo.`

console.log(triangulo(5,8,4))
console.log(lados(4,3,5))
