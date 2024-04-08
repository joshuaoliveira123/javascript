// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
// seu novo salário, com 15% de aumento.

const promocao = (salario, aumento) => (salario * (1 + aumento)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

// salario: R$ 1.405,20 (salario original)
// aumento: 15% = (15/100) = 0,15
console.log(promocao(1405.20, 0.15))