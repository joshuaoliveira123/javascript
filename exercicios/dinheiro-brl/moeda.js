export const moeda = function(tipoMoeda) {
    return {
        style: 'currency',
        currency: `${tipoMoeda}`
    }
}