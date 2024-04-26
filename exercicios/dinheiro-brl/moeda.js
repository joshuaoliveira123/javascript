export const moeda = function(tipoMoeda) {
    return {
        style: 'currency',
        currency: `${tipoMoeda}`
    }
}

export const toMoeda = (str, len = 'pt-br', din = 'brl') => str.toLocaleString(len, moeda(din))