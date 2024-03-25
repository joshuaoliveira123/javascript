// O mesmo fatorial, mas de forma recurssiva!

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let foo = fatorial(5)
console.log(foo)