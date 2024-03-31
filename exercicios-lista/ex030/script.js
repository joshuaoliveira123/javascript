// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo 
// de triângulo será formado:  
//    - EQUILÁTERO: todos os lados iguais 
//    - ISÓSCELES: dois lados iguais 
//    - ESCALENO: todos os lados diferentes

function triangulo(a, b, c) {
    const ab = a + b
    const bc = b + c
    const ac = a + c

    if (a < bc && b < ac && c < ab) {
        console.log(`Os segmentos de reta ${a}, ${b} e ${c} poderiam formar um triângulo!`)

        if (a === b && b === c && a === c) {
            console.log('Seria um triângulo EQUILATERO;')
        } else if (a === b || b === c || a === c) {
            console.log('Seria um triângulo ISÓSCELES;')
        } else {
            console.log('Seria um triângulo ESCALENO;')
        }

        return true
    }

    console.log(`Os segmentos de reta ${a}, ${b} e ${c} não formariam um triângulo!`)
    return false
}

console.log(triangulo(5,8,4))
console.log(triangulo(1,2,3))
console.log(triangulo(5,5,2))
console.log(triangulo(7,7,7))