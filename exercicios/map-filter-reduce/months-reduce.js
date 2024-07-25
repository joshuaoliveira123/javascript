const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Ago', '[...]', 'Dez']

const monthsShortener  = (prev, curr) => {
    if (prev === '') {
        return curr
    } else {
        return `${prev} / ${curr}`
    }
}

const shortenedMonths = months.reduce(monthsShortener, '')

console.log(shortenedMonths) // Jan / Fev / Mar / Abr / Ago / [...] / Dez