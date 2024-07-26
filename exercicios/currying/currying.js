const sum = (x) => (y) => x + y

const addFive = sum(5)
const addTen = sum(10)

const sumExemple = sum(5)(10)
const addNineWithFive = addFive(9)
const addTwoWithFive = addFive(2)
const addEightWithTen = addTen(8)

console.log(sumExemple) // 15
console.log(addNineWithFive) // 14
console.log(addTwoWithFive) // 7
console.log(addEightWithTen) // 18