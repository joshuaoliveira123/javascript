// Contando de forma TRADICIONAL
let foo = function(n) {
    for (let i=0; i<n; i++) {
        console.log(i)
    }
}

// Contando de forma RECURSIVA
let bar = function(n, a=0) {
    if (a > n) {
        console.log('[ERROR] Número de inicio maior que o final.')
    } else if (n == a) {
        return console.log(n)
    } else {
        console.log(a)
        bar(n, a+1)
    }
}

// Função para criar uma linha divisória!

let imprimirLinha = function() {
    console.log('_________________\n')
}


// Chamando funções

let chamada_foo = foo(8)
imprimirLinha()
let chamada_bar = bar(9)