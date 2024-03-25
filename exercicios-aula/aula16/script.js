function parOuImpar(n) {
    if (n % 2 === 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let a = parOuImpar(11) // IMPAR
let b = parOuImpar(128) // PAR

console.log(`a: ${a}`)
console.log(`b: ${b}`)