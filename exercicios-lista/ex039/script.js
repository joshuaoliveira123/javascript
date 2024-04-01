// 39) Faça um algoritmo que mostre na tela a seguinte contagem: 
// 10 9 8 7 6 5 4 3 Acabou!

function main() {
    const arr = []
    for (let i = 10; i > 2; i--) {
        arr.push(i)
    }
    console.log(arr.join(' ') + ' Acabou!')
}

main()