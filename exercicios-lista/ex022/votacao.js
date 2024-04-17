// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
// situação em relação ao alistamento militar. 
//    - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
// alistamento. 
//    - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
// alistamento.

const votar = function(ano=0) {
    const idade = calculaIdade(ano)

    if (idade < 16) {
        return 'NÃO pode votar!'
    } else if (idade < 18) {
        return 'Pode votar se quiser.'
    } else {
        return 'DEVE votar!'
    }

}

const calculaIdade = function(ano) {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const idade = anoAtual - ano
    console.log(`Pessoa nascida em ${ano} tem atualmente ${idade} anos de idade.`)
    return idade
}

console.log(votar(1998)) /* 26 anos */
console.log(votar(2019)) /* 5 anos */
console.log(votar(2007)) /* 17 anos */