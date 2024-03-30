// 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no 
// final uma mensagem. 
// Ex: 
// Nome do Funcionário: Maria do Carmo 
// Salário: 1850,45 
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

const nome = document.querySelector('#nomeFuncionario')
const salario = document.querySelector('#salarioFuncionario')
const output = document.querySelector('#BOX2')

function mostrarFuncionario() {
    const moedaBRL = {
        style: 'currency',
        currency: 'BRL'
    }
    const sal = Number(salario.value).toLocaleString('pt-br', moedaBRL)

    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = `O funcionário ${nome.value} recebe ${sal} por mês.`
    output.appendChild(paragrafo)

    // output.innerHTML += `<p>O funcionário ${nome.value} recebe ${sal} por mês.</p>`
}