// 40) Crie um aplicativo que mostre na tela a seguinte contagem: 
// 0 3 6 9 12 15 18 Acabou!

function main() {
    const arr = []
    for (let i=0;i<20;i+=3) {
        arr.push(i)
    }
    console.log(arr.join(' ') + ' Acabou!')
}

main()