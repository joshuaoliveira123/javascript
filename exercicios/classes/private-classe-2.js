// Classes privadas de verdade com o uso do #
class iAmPrivate {
    #var
    constructor(ex='exemple') {
        this.#var = ex
    }
}

const bar = new iAmPrivate()
console.log(bar.#var)