function sum(...nums) {
    let result = 0

    nums.forEach(n => {
        result += n
    })

    return result
}

console.log(sum(5,67,2,3,5,3,5,10))