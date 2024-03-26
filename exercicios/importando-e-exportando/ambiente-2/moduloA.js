const variavel = 'Valor'
const variavel2 = 'Outro valor'
const getFullName = (firstName, lastName) => {
    return `Meu nome completo é ${firstName} ${lastName}!`
}

module.exports = { variavel, getFullName }
// module.exports = { getFullName } | Apenas um module.exports por arquivo é o ideal, ou da uns bug