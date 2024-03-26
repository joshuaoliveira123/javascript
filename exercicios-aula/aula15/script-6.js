// 85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e 
// guarde esses dados em três vetores. No final, mostre uma listagem contendo 
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

const nome = []
const sexo = []
const salario = []

const mulherSalarioAlto = (nome, sexo, salario) => {
    if (sexo === 'F' && salario >= 5000) {
        return true
    } else {
        return false
    }
}

// Preguiça de fazer um index.html pra usar de input!

nome.push('Jonas')
nome.push('Maria')
nome.push('Carlos')
nome.push('Ana')

sexo.push('M')
sexo.push('F')
sexo.push('M')
sexo.push('F')

salario.push(7000)
salario.push(4000)
salario.push(3000)
salario.push(9000)

// Continuando ...

for (i in nome) {
    // if (mulherSalarioAlto(nome[i], sexo[i], salario[i])) {
    //     console.log(`A ${nome[i]} é uma mulher e recebe R$ ${salario[i]}`)
    // }

    const mostraSe = mulherSalarioAlto(nome[i], sexo[i], salario[i]) ?  console.log(`A ${nome[i]} é uma mulher e recebe R$ ${salario[i]}`) : null
}

console.log('Fim!')
