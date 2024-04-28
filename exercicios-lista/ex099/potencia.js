// 99) Faça um programa que possua uma função chamada Potencia(), que vai receber 
// dois parâmetros numéricos (base e expoente) e vai calcular o resultado da 
// exponenciação. 
// Ex: Potencia(5,2) vai calcular 52 = 25

function potencia(base, expoente) {
    let result = 1
    for (let i = expoente; i > 0; i--) {
        result *= base
    }
    return console.log(`${base} ^ ${expoente} = ${result}`)
}

potencia(5,2)
potencia(6,4)