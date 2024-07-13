const pessoa = {nome: "José", idade: 35}

const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

if (nome === pessoa.nome) {
    console.log('É igual')
} else {
    console.log('É diferente')
}