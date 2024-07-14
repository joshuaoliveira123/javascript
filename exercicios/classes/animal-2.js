// syntax sugar para get e set
class Animal {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}

const animal = new Animal('dog')

console.log(animal.name)
animal.name = 'cat'
console.log(animal.name)