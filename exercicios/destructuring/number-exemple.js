const [a, b] = [1, 2]
const [c, d, ...nums] = [4, 5, 6, 7, 8, 9, 10, 11]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// arr.forEach(element => element.doSomething())
// Só funciona para estruturas interaveis: Arrays, Sets e Maps.
// Para usar um forEach em um objeto, primeiro é preciso converte-lo para um array.
nums.forEach(n => console.log(n))