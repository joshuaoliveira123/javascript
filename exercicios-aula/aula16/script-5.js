let fat = function(a) {
    let fat = 1
    for (let i=a; i>=1; i--) {
        fat *= i
    }
    return fat
}

let f = fat(5)

console.log(f)