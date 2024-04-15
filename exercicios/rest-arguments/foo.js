const sum = function(...nums) {
    let result = 0

    for (let i in nums) {
        result += nums[i]
    }

    return result
}

console.log(sum(5,67,8,2,5,3))