const numbers = [1,56,7,34,2,3,6]
const isBiggerThanFour = (value) => value > 4

const numbersBiggerThanFour = numbers.filter(isBiggerThanFour)

console.log(numbersBiggerThanFour) // [ 56, 7, 34, 6 ]