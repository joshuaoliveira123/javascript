// O tal do Closure

function comprimentar() {
    const nome = 'Joshua'
    return function() {
        return () => `Olá, ${nome}`
    }
}

console.log(comprimentar()) 
console.log(comprimentar()())
console.log(comprimentar()()())