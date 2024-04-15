const sum = function() {
    let result = 0

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    
    return result
}

console.log(sum(1,6,7,2,3,5,6,2))