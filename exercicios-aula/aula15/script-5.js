let num = [2, 8, 4, 6, 7]
let numProcurar = 4 // Caso procure um número que não existe o .indexOf(n) vai retornar -1
// num.sort() -> Fará a ordenação crescente do array, portanto o 4 seria o index 1 em vez do 2

console.log(`A posição do ${numProcurar} é ${num.indexOf(numProcurar)}`)
