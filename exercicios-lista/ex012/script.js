// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu 
// PREÇO PROMOCIONAL, com 5% de desconto. 

const precoPromocional = (produto, desconto) => (produto - (produto * desconto)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

// produto: R$ 10,25 (preço original)
// desconto: 5% = (5/100) = 0,05
console.log(precoPromocional(10.25, 0.05))