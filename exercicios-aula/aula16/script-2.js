function soma(n1 = 0, n2 = 0) {
    n1 = Number(n1) // garante que é um número 
    n2 = Number(n2) // garante que é um número
    return n1 + n2
}

let s = soma(5,8)
console.log(s)

let foo = soma(5)
console.log(foo)

let bar = soma(15, '1')
console.log(bar)