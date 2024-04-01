// 38) Escreva um programa que mostre na tela a seguinte contagem:  
// 6 7 8 9 10 11 Acabou!

function main() {
    const arr = []
    for (let i = 6; i <= 11; i++) {
        arr.push(i)
    }
    console.log(arr.join(' ') + ' Acabou!')
}

main()