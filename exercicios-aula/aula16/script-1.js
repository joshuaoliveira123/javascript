function fibonacci(a) {
    let prev = 0
    let curr = 1

    if (a < 0) {
        return console.log('[ERROR] Digite um número válido!')
    }

    if (a === 0) {
        return console.log('[ZERO TERMOS]')
    }

    for (let i = 0; i < a; i++) {
        console.log(curr)

        let prox = prev + curr
        prev = curr
        curr = prox
    }
}

function imprimirLinha() {
    console.log('_______________\n')
}

imprimirLinha()
let foo = fibonacci(9)
imprimirLinha()

let bar = fibonacci(0)
imprimirLinha()

let baz = fibonacci(1)
imprimirLinha()

let qux = fibonacci(-10)
imprimirLinha()