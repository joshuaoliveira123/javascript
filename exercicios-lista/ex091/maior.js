// 91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses 
// valores para um procedimento Maior() que vai verificar qual deles é o maior e 
// mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem 
// informando essa característica.

const maiorValor = (a, b) => {
    let maior = (a > b) ? `${a} > ${b}` : (b > a) ? `${a} < ${b}` : `${a} = ${b}`
    return console.log(maior)
}

maiorValor(5,8)
maiorValor(5,5)
maiorValor(85,8)