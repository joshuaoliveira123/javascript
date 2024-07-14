// Convesão para variavéis privadas com o _
class iAmPrivate {
    constructor(ex='exemple') {
        this._var = ex
    }
}

const foo = new iAmPrivate()
console.log(foo._var)