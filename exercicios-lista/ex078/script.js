// 78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final, 
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram 
// digitados valores que são múltiplos de 10.

// Variável com função anônima
const main = function(n) {
    const nums = new Array(n)

    // Linha horizontal
    console.log('\n'.padEnd(60,'_') + '\n')
    
    // Simulação de inputs aleatórios
    for (let i = 0; i < nums.length; i++) {
        // Formatando valores para sempre terem dois algarismos
       nums[i] = randomNumber(1,99).toString().padStart(2, '0')
    }

    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 10 === 0) {
            console.log(`Multiplo de 10 encontrado na posição ${i}`)
        }
    }

    
    // Brincando com Clojures 
    return () => () => () => console.log('HELLO')
}

// Variável com função de seta
const randomNumber = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min)

main(15)

// Brincando com Clojures
const foo = main(1)
const bar = foo()
const baz = bar()
baz()

main(2)()()()