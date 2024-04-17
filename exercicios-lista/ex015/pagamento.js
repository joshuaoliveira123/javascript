// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
// por hora trabalhada.

const pagamento = (dias=0) => dias * 8 * 25

const moedaBRL = {
    style: 'currency',
    currency: 'BRL'
}

const diasTrabalhados = 21
console.log(`Total a receber no final do mês: ${pagamento(diasTrabalhados).toLocaleString('pt-br', moedaBRL)}`)