// 95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai 
// receber dois parâmetros e vai retornar o resultado da soma entre eles para o 
// programa principal.

function principal() {
    const somador = (...nums) => nums.reduce((a, b) => a + b)

    console.log(somador(5,7))
}

principal()