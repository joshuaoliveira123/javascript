const square = (n) => n*n

const numbers = [1,2,3]
console.log(numbers) // [ 1, 2, 3 ]

const squareNumbers = numbers.map(square)
console.log(squareNumbers) // [ 1, 4, 9 ]