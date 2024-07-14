class Animal {
    constructor(name) {
        this._name = name
    }

    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }
}

const animal = new Animal('cat')
console.log(animal.getName())
animal.setName('dog')
console.log(animal.getName())