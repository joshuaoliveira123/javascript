// Como fazer a conversão pra REAL
const n = 14.52

const moedaBRL = {
    style: 'currency',
    currency: 'BRL'
}

const format = n.toLocaleString('pt-br', moedaBRL)

console.log(format)