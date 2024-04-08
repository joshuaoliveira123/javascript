// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const largura = 5
const altura = 10

const area = (l, a) => (l * a) / 2

console.log(`Você vai precisar de ${area(largura, altura)} baldes de tinta para pintar a parede!`)