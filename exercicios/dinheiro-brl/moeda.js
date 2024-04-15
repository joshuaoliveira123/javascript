module.exports = {
    moeda(tipoMoeda) {
        return {
            style: 'currency',
            currency: `${tipoMoeda}`
        }
    }
}