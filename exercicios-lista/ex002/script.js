// 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-
// vindas para ela: 
// Ex: 
// Qual é o seu nome? João da Silva 
// Olá João da Silva, é um prazer te conhecer!

const input = document.querySelector('#input')
const output = document.querySelector('#output')
const focusInput = () => {
    input.value = ''
    input.focus()
}

input.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        saudacao()
    }
})

function saudacao() {
    output.innerHTML += `<p>Olá, ${input.value}!</p>`
    focusInput()
}

function limparTela() {
    output.innerHTML = 'OUTPUT:'
    focusInput()
}