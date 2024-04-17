// 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do 
// segundo grau e mostre o valor de Delta.
// DELTA = b² - 4ac

const delta = (a, b, c) => (b ** 2) - (4 * a * c)

console.log(delta(1,8,3))