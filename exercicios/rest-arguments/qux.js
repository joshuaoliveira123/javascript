const sum = function(...nums) {
    return nums.reduce(callback)
}

const callback = function(acc, curr) {
    return acc + curr
}

const linha = n => console.log(''.padStart(n, '-'))

console.log(sum(1,2,3,4,6,5,9))


linha(25)
console.log(callback)
linha(12)
console.log(callback(5,7))
linha(62)