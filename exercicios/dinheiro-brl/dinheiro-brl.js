// Como fazer a conversão pra REAL
const moedaBRL = require('./moeda')

const n = 14.52

const format = n.toLocaleString('pt-br', moedaBRL.moeda('BRL'))

console.log(format)