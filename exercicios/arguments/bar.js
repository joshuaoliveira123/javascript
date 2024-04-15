const sum = function() {
    let result = 0

    for (let i in arguments) {
        result += arguments[i]
    }

    return result
}

console.log(sum(4,2,7,8,2,100))