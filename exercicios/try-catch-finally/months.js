function UserException(mensagem) {
    this._mensagem = mensagem
    this._name = 'UserException'
}

function getMonthName(mo) {
    mo = mo - 1
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    if (months[mo] === undefined) {
        throw new UserException('InvalidMonth')
    }
    return months[mo]
}

try {
    // exemplo
    let myMonth = 15
    let monthName = getMonthName(myMonth)
} catch (err) {
    console.log(err)
    console.log(`ERROR | ${err._name}: ${err._mensagem}`)
}